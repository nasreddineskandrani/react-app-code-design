export const InitGameHistoryStr = '[Games History] Init data per id';
export const AddPastGameHistoryStr = '[Games History] Add past data per id';
export const FetchHistorySuccessStr = '[Games History] fetch SUCCESS';
export const FetchHistoryErrorStr = '[Games History] Fetch ERROR';

interface InitGameHistoryAction {
  type: typeof InitGameHistoryStr;
  payload: any;
}

interface AddPastGameHistoryAction {
  type: typeof AddPastGameHistoryStr;
  payload: any;
}

interface FetchHistorySuccessAction {
  type: typeof FetchHistorySuccessStr;
  payload: any;
}

interface FetchHistoryErrorAction {
  type: typeof FetchHistoryErrorStr;
  payload: any;
}

export type ChatActionTypes =
  InitGameHistoryAction |
  AddPastGameHistoryAction |
  FetchHistorySuccessAction |
  FetchHistoryErrorAction;

export function InitGameHistory(payload: any): ChatActionTypes {
  return {
    type: InitGameHistoryStr,
    payload: payload
  }
}

export function AddPastGameHistory(payload: any): ChatActionTypes {
  return {
    type: AddPastGameHistoryStr,
    payload: payload
  }
}

export function FetchHistorySuccess(payload: any): ChatActionTypes {
  return {
    type: FetchHistorySuccessStr,
    payload: payload
  }
}

export function FetchHistoryError(payload: any): ChatActionTypes {
  return {
    type: FetchHistoryErrorStr,
    payload: payload
  }
}