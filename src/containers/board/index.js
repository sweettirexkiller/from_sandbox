import React from 'react';
import { Square } from './components';
import { FIELD_VALUES } from '../../game-logic/const';
import { useSelector, useDispatch } from 'react-redux';
import { boardSelector, isGameFinishedSelector } from '../game/selectors';
import { makeMove } from '../game/thunks';

export const Board = () => {
    const board = useSelector(boardSelector);
    const gameFinished = useSelector(isGameFinishedSelector);
    const dispatch = useDispatch();
    const onFieldClick = (x, y) => dispatch(makeMove(x, y));

    return (
        <div>
            {board.map((row, y) => (
                <div key={`row-${y}`} className="board-row">
                    {row.map((fieldValue, x) => (
                        <Square
                            key={`field-${x}-${y}`}
                            value={fieldValue}
                            onClick={() => onFieldClick(x, y)}
                            disabled={
                                fieldValue !== FIELD_VALUES.EMPTY ||
                                gameFinished
                            }
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};
