import './GameScreen.css';

const GameScreen = ({ verify }) => {
	return (
		<div className='game_container'>
			<p className='points'>
				<span>Points: 000</span>
			</p>
			<h1>Guess the word</h1>
			<h3 className='tip'>
				Tip: <span>DICA</span>
			</h3>
			<div className='word_container'>
				<span className='letter'>A</span>
				<span className='blank'></span>
			</div>
			<div className='letter_container'>
				<p>Pick a letter</p>
				<form>
					<input type='text' name='letter' maxLength='1' required />
					<button>Ok</button>
				</form>
			</div>
			<div className='wrong_letter'>
				<p>Wrong Letter: </p>
				<span>a, </span>
				<span>b, </span>
			</div>
		</div>
	);
};

export default GameScreen;
