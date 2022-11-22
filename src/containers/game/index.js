import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Status } from '../game-status';
import { Board } from '../board';
import { History } from '../history';
import { GameWrapper, GameInfoWrapper } from './components';
import { moveNumberSelector, gameStateSelector } from './selectors';
import { updateHistory } from '../history/actions';

export const Game = () => {
    const moveNumber = useSelector(moveNumberSelector);
    const gameState = useSelector(gameStateSelector);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateHistory(moveNumber, gameState));
    }, []);

    return (
        <GameWrapper>
            <Board />

            <GameInfoWrapper>
                <Status />

                <History />
            </GameInfoWrapper>
        </GameWrapper>
    );
};
