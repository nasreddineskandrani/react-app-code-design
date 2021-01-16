import { FetchHistorySuccessStr } from "../+shared/chart-history/+state/chart-history.actions";

export interface GamesState {
    [id: string]: {
        historyData: any[];
    };
}

export const initialState: GamesState = {
};
  
function gamesReducer(state = initialState, action: any) {
    switch (action.type) {
        case FetchHistorySuccessStr: 
            return {
                ...state,
                [action.payload.id]: {
                    ...state[action.payload.id],
                    historyData: [...(state[action.payload.id] ? state[action.payload.id].historyData : []), ...action.payload.data],
                    startDate: action.payload.startDate,
                    endDate: action.payload.endDate
                }
            };
        default:
            return state;
    }
}
  
export default gamesReducer;