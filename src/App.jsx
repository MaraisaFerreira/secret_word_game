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

	console.log(words);
	return (
		<div className='App'>
			{gameStage == stages[0].name && <StartScreen />}
			{gameStage == stages[1].name && <GameScreen />}
			{gameStage == stages[2].name && <GameOver />}
		</div>
	);
}

export default App;
