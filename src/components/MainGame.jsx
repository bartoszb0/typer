import clsx from 'clsx';

export default function MainGame(props) {

    const wordsElements = props.wordsToType.split('').map((letter, index) => {
        console.log(letter)

        return <span className={clsx('', {
            'typed': props.typedInput[index] === letter,
            'currentLetter': props.currentLetter === index,
            'mistake': props.mistake.letter === index && letter != ' '
        })}>{letter}</span>
    })


    return (
        <>
        {!props.gameStarted &&
            <div className="startScreen">
                <h3>type</h3>
                <h1 className='typerWord'>
                    {wordsElements}
                </h1>
                <h3>to start</h3>
            </div>
        }

        {props.gameStarted && 
            <div className='typingTestWords'>{wordsElements}</div>
        }
        </>
    )
}