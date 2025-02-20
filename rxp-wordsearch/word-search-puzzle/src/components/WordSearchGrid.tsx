import React from 'react';

interface WordSearchGridProps {
  grid: string[][];
}

const WordSearchGrid: React.FC<WordSearchGridProps> = ({ grid }) => {
  return (
    <div className="word-search-grid">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="word-search-row">
          {row.map((letter, colIndex) => (
            <span key={colIndex} className="word-search-letter">
              {letter}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default WordSearchGrid;