import './GameOver.css';

const GameOver = ({ end }) => {
	return (
		<div>
			<h1>Game Over</h1>
			<button onClick={end}>Retry</button>
		</div>
	);
};

export default GameOver;
