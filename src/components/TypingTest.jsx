export default function TypingTest({wordsElements, countdown}) {

    return (
        <div className='typingTestdiv'>
            <div className="textContainer">
                <div className='mainGameTest'>{wordsElements}</div>                
            </div>
                <h1 className="timer">{countdown}</h1>
        </div>
    )
}