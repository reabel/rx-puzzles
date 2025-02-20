export const generateRandomWords = (count: number): string[] => {
    // TODO: Use an external word gen library / api
    const wordList = [
        'apple', 'banana', 'cherry', 'date', 'fig', 'grape', 'kiwi', 
        'lemon', 'mango', 'nectarine', 'orange', 'papaya', 'quince', 
        'raspberry', 'strawberry', 'tangerine', 'watermelon'
    ];

    const randomWords: string[] = [];
    const usedIndices: Set<number> = new Set();

    while (randomWords.length < count) {
        const randomIndex = Math.floor(Math.random() * wordList.length);
        if (!usedIndices.has(randomIndex)) {
            randomWords.push(wordList[randomIndex]);
            usedIndices.add(randomIndex);
        }
    }

    return randomWords;
};