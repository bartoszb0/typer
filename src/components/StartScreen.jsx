import clsx from 'clsx';

export default function StartScreen(props) {

    const wordElements = props.wordToType.split('').map((letter, index) => {
        return <span className={clsx('', {
            'typed': props.typedInput[index] === letter
        })}>{letter}</span>
    })

    return (
        <div className="startScreen">
            <h3>type</h3>
            <h1 className='typerWord'>
                {wordElements}
            </h1>
            <h3>to start</h3>
        </div>
    )
}