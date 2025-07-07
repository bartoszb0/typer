import { useEffect } from 'react'
import { useState } from 'react'
import { randomWords } from './words'
import StartScreen from './components/StartScreen'
import HiddenInput from './components/HiddenInput'

export default function App() {

  // Everything that user types that user types
  const [typedInput, setTypedInput] = useState('')
  const [wordToType, setWordToType] = useState('typer')

  const trimmedInput = typedInput.slice(-wordToType.length)
  console.log(trimmedInput)

  const gameStarted = wordToType === 'typer' && trimmedInput === wordToType ? true : false

  function captureCurrentInput(word) {
    setTypedInput(word)
  }

  return (
    <main>


      <StartScreen
        wordToType = {wordToType}
        gameStarted = {gameStarted}
      />

      <HiddenInput
        captureCurrentInput={captureCurrentInput}
      />
    </main>
  )
}