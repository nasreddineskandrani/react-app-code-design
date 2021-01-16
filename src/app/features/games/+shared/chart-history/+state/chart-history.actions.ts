import { createAction } from "@reduxjs/toolkit";

export interface IdPayload {
  id: string;
}

export interface HistoryFetchPayload {
  id: string;
  startDate: Date;
  endDate: Date;
  data: any[];
}

export const InitGameHistory = createAction<IdPayload>('[Games History] Init data per id');
export const AddPastGameHistory = createAction<IdPayload>('[Games History] Add past data per id');
export const FetchHistorySuccess = createAction<HistoryFetchPayload>('[Games History] fetch SUCCESS');
export const FetchHistoryError = createAction<any>('[Games History] Fetch ERROR');
