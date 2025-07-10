export default function TypingTest({wordsElements, countdown}) {
    return (
        <div className='typingTestdiv'>
                <div className='mainGameTest'>{wordsElements}</div>
                <h1 className="timer">{countdown}</h1>
        </div>
    )
}