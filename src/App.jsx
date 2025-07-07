import { useEffect } from 'react'
import { useState } from 'react'
import { randomWords } from './words'
import StartScreen from './components/StartScreen'
import HiddenInput from './components/HiddenInput'

export default function App() {

  // Everything that user types that user types
  const [typedInput, setTypedInput] = useState([])
  const [wordToType, setWordToType] = useState('typer')
  const [completedWords, setCompletedWords] = useState([])

  console.log(typedInput)
  console.log(completedWords.length)

  if (typedInput.length === wordToType.length) {
    console.log('CORRECT')
    correctWord()
  }

  function captureCurrentInput(typedLetter) {
    if (typedLetter === wordToType[typedInput.length]) {
      setTypedInput(prev => [...prev, typedLetter])
    } else {
      console.log(typedInput.length) // need to make this letter of this index red
    }
  }

  function correctWord() {
    setCompletedWords(prev => [...prev, typedInput.join('')])
    setTypedInput([])
  }

  return (
    <main>
      <StartScreen
        wordToType = {wordToType}
        typedInput = {typedInput}
      />

      <HiddenInput
        captureCurrentInput={captureCurrentInput}
      />
    </main>
  )
}