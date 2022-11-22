import { createSelector } from 'reselect';
import { prop } from 'ramda';

import { GAME_REDUCER_NAME } from './reducer';
import { BOARD_SIZE, PLAYERS } from '../../game-logic/const';
import { calculateWinner } from '../../game-logic/logic';

const getGameReducerState = prop(GAME_REDUCER_NAME);

export const gameStateSelector = createSelector(
    getGameReducerState,
    (game) => game.get('gameState')
);

export const boardSelector = createSelector(
    gameStateSelector,
    (gameState) => gameState.get('board')
);

export const currentPlayerSelector = createSelector(
    gameStateSelector,
    (gameState) => gameState.get('currentPlayer')
);

export const winnnerSelector = createSelector(
    boardSelector,
    (board) => calculateWinner(board)
);

export const moveNumberSelector = createSelector(
    gameStateSelector,
    (gameState) => gameState.get('moveNumber')
);

export const isGameFinishedSelector = createSelector(
    moveNumberSelector,
    winnnerSelector,
    (moveNumber, winner) =>
        moveNumber >= BOARD_SIZE * BOARD_SIZE || winner !== PLAYERS.UNKNOWN
);

export const isGameAHistorySnapshotSelector = createSelector(
    getGameReducerState,
    (game) => game.get('isRecordedState')
);
