import { isGameFinishedSelector, currentPlayerSelector } from './selectors';
import { setFieldValue } from './actions';

export const makeMove = (x, y) => (dispatch, getState) => {
    const state = getState();

    if (isGameFinishedSelector(state)) {
        return;
    }

    const currentPlayer = currentPlayerSelector(state);
    dispatch(setFieldValue(x, y, currentPlayer));
};
