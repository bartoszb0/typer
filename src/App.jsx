import { useState } from 'react'
import { randomTexts } from './test'
import MainGame from './components/MainGame'
import HiddenInput from './components/HiddenInput'

export default function App() {

  // TODO :
  // - fix displaying typing text
  // - add timer after which you can restart game
  // - add percantage of proper words and mistakes etc


  // Everything that user types that user types
  const [typedInput, setTypedInput] = useState([])
  const [wordsToType, setWordsToType] = useState('typer') // figure it out
  const [gameStarted, setGameStarted] = useState(false)
  const [mistake, setMistake] = useState({
    letter: null,
    count: 0
  })

  console.log(mistake)

  // Derived values
  const completedWords = typedInput.join('').split(' ').length - 1 // derived value - completed words
  const currentLetter = typedInput.length


  if (typedInput.length === wordsToType.length) {
    if (!gameStarted) {
      startGame()
    }
  }

  function startGame() {
    setGameStarted(true)
    setTypedInput([])
    setMistake(prev => { 
        return {
          letter: null,
          count: 0
      }})
    setWordsToType(randomTexts[Math.floor(Math.random() * randomTexts.length)])
  }

  function captureCurrentInput(typedLetter) {
    // only push to typedInput letters that are the same as ones in wordsToType
    setMistake(prev => { 
      return {
        ...prev,
        letter: null,
    }})

    if (typedLetter === wordsToType[typedInput.length]) {
      setTypedInput(prev => [...prev, typedLetter])
    } else {
      setMistake(prev => { 
        return {
          letter: typedInput.length,
          count: prev.count + 1
      }})
    }
  }

  return (
    <main>
      <MainGame
        wordsToType = {wordsToType}
        typedInput = {typedInput}
        currentLetter = {currentLetter}
        gameStarted = {gameStarted}
        mistake = {mistake}
      />

      <HiddenInput
        captureCurrentInput={captureCurrentInput}
      />
    </main>
  )
}