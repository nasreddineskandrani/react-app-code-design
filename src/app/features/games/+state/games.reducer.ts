import { Action, createReducer } from "@reduxjs/toolkit";
import { FetchHistorySuccess, InitGameHistory } from "../+shared/chart-history/+state/chart-history.actions";
import { LeaveGames } from "./games.actions";

export interface GamesState {
    [id: string]: {
        historyData: any[];
    };
}

export const initialState: GamesState = {
};
  
const gamesReducer = createReducer(initialState, (builder) => {
    builder.addCase(FetchHistorySuccess, (state, action) => {
        return {
            ...state,
            [action.payload.id]: {
                ...state[action.payload.id],
                historyData: [...(state[action.payload.id] ? state[action.payload.id].historyData : []), ...action.payload.data],
                startDate: action.payload.startDate,
                endDate: action.payload.endDate
            }
        };
    });
    builder.addCase(LeaveGames, () => {
        return {};
    });
});
  
export default gamesReducer;