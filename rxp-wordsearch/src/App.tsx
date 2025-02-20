import React, { useState, useEffect } from 'react';
import WordSearchGrid from './components/WordSearchGrid.tsx';
import WordSearchControls from './components/WordSearchControls.tsx';
import { generateRandomWords } from './utils/wordGenerator';

function App() {
  const [grid, setGrid] = useState<string[][]>([]);
  const [words, setWords] = useState<string[]>([]);
  const [gridSize, setGridSize] = useState<number>(10); // Default grid size
  
  useEffect(() => {
    generateNewPuzzle();
  }, [gridSize]);
  
  const generateNewPuzzle = () => {
    const newWords = generateRandomWords(gridSize);
    setWords(newWords); //This is pointless since the state doesn't really update until the next render
    // Logic to generate the grid based on newWords
    // This should include placing the words in the grid
    const newGrid = createGridWithWords(words, gridSize);
    setGrid(newGrid);
  };

  const createGridWithWords = (words: string[], size: number) => {
    // Placeholder for grid generation logic
    console.log('words:', words);
    const emptyGrid = Array.from({ length: size }, () => Array(size).fill(''));
    // Logic to place words in the grid goes here
    // This should include placing the words horizontally, vertically, and diagonally
    
    // This should also include filling the rest of the grid with random letters

    return emptyGrid;
  };

  return (
    <div className="App">
      <h1>Word Search Puzzle</h1>
      <WordSearchControls onNewGame={generateNewPuzzle} setGridSize={setGridSize} />
      <WordSearchGrid grid={grid} />
    </div>
  );
}

export default App
