import './StartScreen.css';

const GameScreen = ({ verify }) => {
	return (
		<div>
			<h1>Game Screen</h1>
			<button onClick={verify}>End Game</button>
		</div>
	);
};

export default GameScreen;
