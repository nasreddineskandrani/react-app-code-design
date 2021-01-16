export const LeaveGamesStr = '[Games] leave page';

interface LeaveGamesAction {
  type: typeof LeaveGamesStr;
  payload: any;
}

export type GamesActionTypes =
  LeaveGamesAction

export function LeaveGames(): GamesActionTypes {
  return {
    type: LeaveGamesStr,
    payload: null
  }
}