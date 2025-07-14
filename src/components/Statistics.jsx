export default function Statistics(props) {

    // obliczenia here, moze jakies graphy

    // - jaki % bledow per postawione znaki

    const passedTime = props.countdown === 30 ? 2 : 1

    const wpm = props.completedWords * passedTime

    const mistakesPercent = ((props.mistakesCount / (props.lettersCount + props.mistakesCount)) * 100).toFixed(1)

    return (
        <div className="statistics">
            <div className="mainStat">
                <h1>{wpm} WPM</h1><h3>typing speed</h3>
            </div>

            <div className="lowerStat">
                <div>
                    <h1>{props.mistakesCount}</h1><h3>{props.mistakesCount === 1 ? 'error' : 'errors'} made</h3>
                </div>
                
                <div>
                    <h1>{props.lettersCount + props.mistakesCount}</h1><h3>total keystrokes</h3>
                </div>

                <div>
                    <h1>{mistakesPercent}%</h1><h3>error rate</h3>
                </div>
            </div>
            
            <button className="resetButton" onClick={props.resetGame}>Try again</button>
        </div>
    )
}