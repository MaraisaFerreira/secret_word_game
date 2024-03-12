import './GameOver.css';

const GameOver = ({ end, score }) => {
	return (
		<div>
			<h1>Game Over</h1>
			<h3>Pontuação: {score}</h3>
			<button onClick={end}>Recomeçar</button>
		</div>
	);
};

export default GameOver;
