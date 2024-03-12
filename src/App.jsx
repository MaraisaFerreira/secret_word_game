import './App.css';

/* React */
import { useEffect, useState } from 'react';

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
	const [letters, setLetters] = useState([]);

	const [guessedLetters, setGuessedLetters] = useState([]);
	const [wrongLetters, setWrongLetters] = useState([]);
	const [chances, setChances] = useState(5);
	const [score, setScore] = useState(0);

	useEffect(() => {
		if (chances <= 0) {
			setGameStage(stages[2].name);
		}
	}, [chances]);

	useEffect(() => {
		const uniqueLetters = [...new Set(letters)];
		if (
			uniqueLetters.length == guessedLetters.length &&
			guessedLetters.length > 0
		) {
			setScore((prevScore) => prevScore + 100);
			startGame();
		}
	}, [guessedLetters, letters]);

	const resetChosenWord = () => {
		setPickedWord('');
		setPickedCategory('');
		setLetters([]);
		setGuessedLetters([]);
		setWrongLetters([]);
	};

	const resetScoreAndChances = () => {
		setScore(0);
		setChances(5);
	};

	const fillStates = () => {
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
	};

	const startGame = () => {
		resetChosenWord();
		fillStates();

		setGameStage(stages[1].name);
	};

	const verifyLetter = (letter) => {
		const normalizedLetter = letter.toLowerCase();

		if (
			guessedLetters.includes(normalizedLetter) ||
			wrongLetters.includes(normalizedLetter)
		) {
			return;
		}

		if (letters.includes(normalizedLetter)) {
			setGuessedLetters((prevLetters) => [...prevLetters, normalizedLetter]);
		} else {
			setWrongLetters((prevWrongLetter) => [
				...prevWrongLetter,
				normalizedLetter,
			]);
			setChances((prevChances) => --prevChances);
		}
	};

	const endGame = () => {
		resetChosenWord();
		setGameStage(stages[0].name);
		resetScoreAndChances();
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
			{gameStage == stages[2].name && <GameOver end={endGame} score={score} />}
		</div>
	);
}

export default App;
