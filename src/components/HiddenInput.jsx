export default function HiddenInput({inputRef, captureCurrentInput}) {
    return (
        <input
            ref={inputRef}
            className="hiddenInput"
            autoFocus
            onChange={(e) => {
                captureCurrentInput(e.currentTarget.value)
                e.currentTarget.value = ''
            }
            }
        />
    )
}