import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from "./+state/app.reducer";

export default function configureStore(preloadedState: any) {
    const middlewares: never[] = [/*loggerMiddleware, thunkMiddleware*/]
    const middlewareEnhancer = applyMiddleware(...middlewares)
  
    const enhancers = [middlewareEnhancer]
    const composedEnhancers = composeWithDevTools(...enhancers)
  
    const store = createStore(rootReducer, preloadedState, composedEnhancers)
  
    return store
}