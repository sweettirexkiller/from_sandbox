import { SET_FIELD_VALUE } from './const';
import { moveNumberSelector, gameStateSelector } from './selectors';
import { updateHistory } from '../history/actions';

export const updateHistoryOnMove = (store) => (next) => (action) => {
    if (action.type !== SET_FIELD_VALUE) {
        return next(action);
    }

    const result = next(action);

    const state = store.getState();
    const moveNumber = moveNumberSelector(state);
    const gameState = gameStateSelector(state);

    store.dispatch(updateHistory(moveNumber, gameState));

    return result;
};
