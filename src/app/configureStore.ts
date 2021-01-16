import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from "./+state/app.reducer";
import rootSaga from "./+state/app.sagas";

// Define the Reducers that will always be present in the application
const staticReducers = {
    rootTestState: rootReducer
}

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(preloadedState: any) {
    const middlewares: any[] = [sagaMiddleware]
    const middlewareEnhancer = applyMiddleware(...middlewares)
  
    const enhancers = [middlewareEnhancer]
    const composedEnhancers = composeWithDevTools(...enhancers)
  
    const store: any = createStore(rootReducer, preloadedState, composedEnhancers)
  
    // Add a dictionary to keep track of the registered async reducers
    store.asyncReducers = {}

    // Create an inject reducer function
    // This function adds the async reducer, and creates a new combined reducer
    store.injectReducer = (key: any, asyncReducer: any) => {
        store.asyncReducers[key] = asyncReducer
        store.replaceReducer(createReducer(store.asyncReducers))
    }

    // Add injectSaga method to our store
    store.injectSaga = createSagaInjector(sagaMiddleware.run, rootSaga);

    // Return the modified store
    return store;
}

function createReducer(asyncReducers: any) {
    return combineReducers({
        ...staticReducers,
        ...asyncReducers // https://redux.js.org/recipes/code-splitting
    });
}

// https://manukyan.dev/posts/2019-04-15-code-splitting-for-redux-and-optional-redux-saga/
function createSagaInjector(runSaga: any, rootSaga: any) {
    // Create a dictionary to keep track of injected sagas
    const injectedSagas = new Map();

    const isInjected = (key: any) => injectedSagas.has(key);

    const injectSaga = (key: any, saga: any) => {
        // We won't run saga if it is already injected
        if (isInjected(key)) return;

        // Sagas return task when they executed, which can be used
        // to cancel them
        const task = runSaga(saga);

        // Save the task if we want to cancel it in the future
        injectedSagas.set(key, task);
    };

    // Inject the root saga as it a staticlly loaded file,
    injectSaga('root', rootSaga);

    return injectSaga;
}