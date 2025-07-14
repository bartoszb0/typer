export default function TypingTest({wordsElements, countdown}) {

    return (
        <div className='typingTestdiv' ref={containerRef}>
                <div className='mainGameTest'>{wordsElements}</div>
                <h1 className="timer">{countdown}</h1>
        </div>
    )
}