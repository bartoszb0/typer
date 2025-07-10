import clsx from 'clsx';

export default function StartScreen(props) {
    return (
        <div className="startScreen">
                <h3>type</h3>
                <h1 className='typerWord'>
                    {props.wordsElements}
                </h1>
                <h3>to start</h3>

            <div className="timeButtons">
                <button className={clsx("timeButton", { selected: props.countdown === 30 })}
                    onClick={() => props.changeTime(30)}
                >30s</button>
                <button className={clsx("timeButton", { selected: props.countdown === 60 })}
                    onClick={() => props.changeTime(60)}
                >60s</button>
            </div>
        </div>
    )
}