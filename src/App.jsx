import './App.css';

/* React */
import { useState } from 'react';

/* Data */
import { wordsList } from './data/words';

/* components */
import GameOver from './components/GameOver';
import GameScreen from './components/GameScreen';
import StartScreen from './components/StartScreen';

const stages = [
	{ id: 1, name: 'start' },
	{ id: 2, name: 'game' },
	{ id: 3, name: 'end' },
];

function App() {
	const [gameStage, setGameStage] = useState(stages[0].name);
	const [words] = useState(wordsList);
	const [pickedWord, setPickedWord] = useState('');
	const [pickedCategory, setPickedCategory] = useState('');
	const [letters, setLetters] = useState(['']);

	const [guessedLetters, setGuessedLetters] = useState([]);
	const [wrongLetters, setWrongLetters] = useState([]);
	const [chances, setChances] = useState(5);
	const [score, setScore] = useState(0);

	const startGame = () => {
		/* category */
		const categories = Object.keys(words);
		const category = categories[parseInt(Math.random() * categories.length)];

		/* word */
		const allWords = words[category];
		const word = allWords[parseInt(Math.random() * allWords.length)];
		setPickedCategory(category);
		setPickedWord(word);
		const wordLetters = word.toLowerCase().split('');
		setLetters(wordLetters);

		console.log(pickedWord, pickedCategory, letters);
		setGameStage(stages[1].name);
	};

	const verifyLetter = () => {
		setGameStage(stages[2].name);
	};

	const endGame = () => {
		setGameStage(stages[0].name);
	};

	return (
		<div className='App'>
			{gameStage == stages[0].name && <StartScreen startGame={startGame} />}
			{gameStage == stages[1].name && (
				<GameScreen
					verify={verifyLetter}
					pickedCategory={pickedCategory}
					pickedWord={pickedWord}
					letters={letters}
					guessedLetters={guessedLetters}
					wrongLetters={wrongLetters}
					chances={chances}
					score={score}
				/>
			)}
			{gameStage == stages[2].name && <GameOver end={endGame} />}
		</div>
	);
}

export default App;
