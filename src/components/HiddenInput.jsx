export default function HiddenInput({captureCurrentInput}) {
    return (
        <input
            className="hiddenInput"
            autoFocus
            onChange={(e) => 
                captureCurrentInput(e.currentTarget.value)
            }
        />
    )
}