import React, { useState, useEffect } from 'react';
import WordSearchGrid from './components/WordSearchGrid';
import WordSearchControls from './components/WordSearchControls';
import { generateRandomWords } from './utils/wordGenerator';

const App = () => {
  const [grid, setGrid] = useState<string[][]>([]);
  const [words, setWords] = useState<string[]>([]);
  const [gridSize, setGridSize] = useState<number>(10); // Default grid size

  useEffect(() => {
    generateNewPuzzle();
  }, [gridSize]);

  const generateNewPuzzle = () => {
    const newWords = generateRandomWords(gridSize);
    setWords(newWords);
    // Logic to generate the grid based on newWords
    // This should include placing the words in the grid
    const newGrid = createGridWithWords(newWords, gridSize);
    setGrid(newGrid);
  };

  const createGridWithWords = (words: string[], size: number) => {
    // Placeholder for grid generation logic
    const emptyGrid = Array.from({ length: size }, () => Array(size).fill(''));
    // Logic to place words in the grid goes here
    return emptyGrid;
  };

  return (
    <div className="App">
      <h1>Word Search Puzzle</h1>
      <WordSearchControls onNewGame={generateNewPuzzle} setGridSize={setGridSize} />
      <WordSearchGrid grid={grid} />
    </div>
  );
};

export default App;