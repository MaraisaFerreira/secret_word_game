import { useRef, useState } from 'react';
import './GameScreen.css';

const GameScreen = ({
	verify,
	pickedCategory,
	letters,
	guessedLetters,
	wrongLetters,
	chances,
	score,
}) => {
	const [letter, setLetter] = useState('');
	const letterInputRef = useRef(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		verify(letter);
		setLetter('');
		letterInputRef.current.focus();
	};

	return (
		<div className='game_container'>
			<p className='points'>
				<span>Pontos: {score}</span>
			</p>
			<h1>Adivinhe a palavra</h1>
			<h3 className='tip'>
				Dica: <span>{pickedCategory.toUpperCase()}</span>
			</h3>
			<p>Você ainda tem {chances} chances.</p>
			<div className='word_container'>
				{letters.map((letter, i) =>
					guessedLetters.includes(letter) ? (
						<span className='letter' key={i}>
							{letter}
						</span>
					) : (
						<span key={i} className='blank'></span>
					),
				)}
			</div>
			<div className='letter_container'>
				<p>Escolha uma letra</p>
				<form onSubmit={handleSubmit}>
					<input
						type='text'
						name='letter'
						maxLength='1'
						required
						value={letter}
						onChange={(e) => setLetter(e.target.value)}
						ref={letterInputRef}
					/>
					<button type='submit'>Ok</button>
				</form>
			</div>
			<div className='wrong_letter'>
				<p>
					Letras Erradas:
					{wrongLetters.map((letter, i) => (
						<span key={i}> {letter.toUpperCase()},</span>
					))}
				</p>
			</div>
		</div>
	);
};

export default GameScreen;
