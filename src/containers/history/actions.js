import { UPDATE_HISTORY, LOAD_SNAPSHOT } from './const';

export const updateHistory = (moveNumber, snapshot) => ({
    type: UPDATE_HISTORY,
    moveNumber,
    snapshot
});

export const loadSnapshot = (moveNumber, snapshot) => ({
    type: LOAD_SNAPSHOT,
    moveNumber,
    snapshot
});
