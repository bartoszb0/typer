import { useEffect } from 'react'
import { useState } from 'react'
import StartScreen from './components/StartScreen'
import HiddenInput from './components/HiddenInput'

export default function App() {

  const [typedWord, setTypedWord] = useState('')

  console.log(typedWord)

  // moze tutaj bedzie trzeba uzyc useEffect do sprawdzania czy slowo sie zgadza z danym slowem


  function captureCurrentWord(word) {
    setTypedWord(word)
  }

  return (
    <main>
      <StartScreen />



      <HiddenInput
        captureCurrentWord={captureCurrentWord}
      />
    </main>
  )
}