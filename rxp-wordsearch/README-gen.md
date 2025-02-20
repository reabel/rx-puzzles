# Word Search Puzzle

## Project Overview

This project is a React application that implements a word search puzzle game. Users can generate random words and interact with the puzzle through a user-friendly interface.

## Features

- Generate a grid filled with random letters.
- Highlight words found in the grid.
- Controls to start a new game or reset the puzzle.

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd word-search-puzzle
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to view the application.

## Project Structure

```
word-search-puzzle
├── public
│   ├── index.html
├── src
│   ├── components
│   │   ├── WordSearchGrid.tsx
│   │   └── WordSearchControls.tsx
│   ├── utils
│   │   └── wordGenerator.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── styles
│       └── App.css
├── package.json
├── tsconfig.json
└── README.md
```

## Technologies Used

- React
- TypeScript
- Vite
- CSS

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.