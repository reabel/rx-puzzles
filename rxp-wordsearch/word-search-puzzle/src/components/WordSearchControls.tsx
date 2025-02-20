import React from 'react';

const WordSearchControls: React.FC<{ onNewGame: () => void; onReset: () => void }> = ({ onNewGame, onReset }) => {
    return (
        <div className="word-search-controls">
            <button onClick={onNewGame}>New Game</button>
            <button onClick={onReset}>Reset</button>
        </div>
    );
};

export default WordSearchControls;