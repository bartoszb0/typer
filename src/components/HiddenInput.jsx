export default function HiddenInput({captureCurrentWord}) {
    return (
        <input
            className="hiddenInput"
            autoFocus
            onChange={(e) => 
                captureCurrentWord(e.currentTarget.value)
            }
        />
    )
}