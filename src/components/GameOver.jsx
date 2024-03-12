import './GameOver.css';

const GameOver = ({ end, score }) => {
	return (
		<div>
			<h1>Game Over</h1>
			<h3>Score: {score}</h3>
			<button onClick={end}>Retry</button>
		</div>
	);
};

export default GameOver;
