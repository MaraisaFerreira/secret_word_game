import './GameScreen.css';

const GameScreen = ({
	verify,
	pickedCategory,
	pickedWord,
	letters,
	guessedLetters,
	wrongLetters,
	chances,
	score,
}) => {
	return (
		<div className='game_container'>
			<p className='points'>
				<span>Points: {score}</span>
			</p>
			<h1>Guess the word</h1>
			<h3 className='tip'>
				Tip: <span>{pickedCategory}</span>
			</h3>
			<p>You still have {chances} chances.</p>
			<div className='word_container'>
				{letters.map((letter, i) =>
					guessedLetters.includes(letters) ? (
						<span key={i} className='letter'>
							{letter}
						</span>
					) : (
						<span key={i} className='blank'></span>
					),
				)}
			</div>
			<div className='letter_container'>
				<p>Pick a letter</p>
				<form>
					<input type='text' name='letter' maxLength='1' required />
					<button>Ok</button>
				</form>
			</div>
			<div className='wrong_letter'>
				<p>
					Wrong Letter:
					{wrongLetters.map((letter) => (
						<span>{letter.toUpperCase()},</span>
					))}
				</p>
			</div>
		</div>
	);
};

export default GameScreen;
