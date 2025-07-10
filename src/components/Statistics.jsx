export default function Statistics(props) {

    // obliczenia here, moze jakies graphy

    // - jaki % bledow per postawione znaki

    const passedTime = props.countdown === 30 ? 2 : 1

    const wpm = props.completedWords * passedTime

    const mistakesPercent = ((props.mistakesCount / (props.lettersCount + props.mistakesCount)) * 100).toFixed(1)

    return (
        <div className="statistics">
            <h2>Typing speed: {wpm} words per minute</h2>
            <h2>Errors made: {props.mistakesCount}</h2>
            <h2>Total Keystrokes: {props.lettersCount + props.mistakesCount}</h2>
            <h2>Error Rate: {mistakesPercent}%</h2>
            <button className="resetButton" onClick={props.resetGame}>Try again</button>
        </div>
    )
}