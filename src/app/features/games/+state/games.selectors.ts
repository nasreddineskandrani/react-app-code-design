import { createSelector } from 'reselect'

export const getGamesState = (state: any) => state.games

export const getGamesHistoryPerId = () =>
  createSelector(
    state => state.games,
    (_: any, id: any) => id,
    (games, id) =>  games[id] ? games[id].historyData : undefined
  )

export const getRange = () =>
  createSelector(
    state => state.games,
    (_: any, id: any) => id,
    (games, id) => games[id] ? { startDate: games[id].startDate, endDate: games[id].endDate } : {}
  )
