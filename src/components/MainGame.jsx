import { useEffect, useRef } from 'react';
import clsx from 'clsx';
import StartScreen from './StartScreen'
import TypingTest from './TypingTest'
import Statistics from './Statistics'

export default function MainGame(props) {

    const currentLetterRef = useRef(null);

    useEffect(() => {
        if (currentLetterRef.current) {
            currentLetterRef.current.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        }
    }, [props.currentLetter])

    const wordsElements = props.wordsToType.split('').map((letter, index) => {
        const isCurrent = props.currentLetter === index;

        return <span
            key={index}
            ref={isCurrent ? currentLetterRef : null}
            className={clsx('', {
                'typed': props.typedInput[index] === letter,
                'currentLetter': isCurrent,
                'mistake': props.mistake.letter === index && letter != ' '
        })}>{letter}</span>
    })


    return (
        <>
        {!props.gameStarted &&
            <StartScreen 
                wordsElements = {wordsElements}
                changeTime = {props.changeTime}
                countdown = {props.countdown}
            />
        }

        {props.gameStarted && !props.gameOver &&
            <TypingTest 
                wordsElements = {wordsElements}
                countdown = {props.countdown}
                currentLetter = {props.currentLetter}
            />
        }

        {props.gameOver &&
            <Statistics
                countdown = {props.countdown}
                completedWords = {props.completedWords}
                mistakesCount = {props.mistakesCount}
                lettersCount = {props.lettersCount}
                resetGame = {props.resetGame}
                staticTime = {props.staticTime}
            />
        }
        </>
    )
}