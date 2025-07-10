import clsx from 'clsx';
import StartScreen from './StartScreen'
import TypingTest from './TypingTest'
import Statistics from './Statistics'

export default function MainGame(props) {

    const wordsElements = props.wordsToType.split('').map((letter, index) => {
        return <span className={clsx('', {
            'typed': props.typedInput[index] === letter,
            'currentLetter': props.currentLetter === index,
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
            />
        }

        {props.gameOver &&
            <Statistics
                countdown = {props.countdown}
                completedWords = {props.completedWords}
                mistakesCount = {props.mistakesCount}
                lettersCount = {props.lettersCount}
                resetGame = {props.resetGame}
            />
        }
        </>
    )
}