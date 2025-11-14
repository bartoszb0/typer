import { useEffect, useRef, useState } from "react";
import HiddenInput from "./components/HiddenInput";
import MainGame from "./components/MainGame";
import { randomTexts } from "./test";

export default function App() {
  // Check whether user is using mobile device
  const isMobile =
    /Mobi|Android/i.test(navigator.userAgent) || window.innerWidth < 768;
  console.log(isMobile);

  // Everything that user types that user types
  const [typedInput, setTypedInput] = useState([]);
  const [wordsToType, setWordsToType] = useState("typer");
  const [gameStarted, setGameStarted] = useState(false);
  const [mistake, setMistake] = useState({ letter: null, count: 0 });
  const [countdown, setCountdown] = useState(30);
  const [staticTime, setStaticTime] = useState(30);
  const [gameOver, setGameOver] = useState(false);

  const inputRef = useRef(null);

  // Derived values
  const completedWords = typedInput.join("").split(" ").length - 1; // derived value - completed words
  const currentLetter = typedInput.length;

  // Run timer when game starts
  useEffect(() => {
    if (!gameStarted) return;

    const interval = setInterval(() => {
      setCountdown((prevCount) => {
        if (prevCount <= 1) {
          clearInterval(interval);
          setGameOver(true);
          return 0;
        }
        return prevCount - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [gameStarted]);

  // Start game if input is equal to 'typer'
  if (typedInput.length === wordsToType.length) {
    if (!gameStarted) {
      startGame();
    }
  }

  function startGame() {
    setGameStarted(true);
    setTypedInput([]);
    setMistake((prev) => {
      return {
        letter: null,
        count: 0,
      };
    });
    setWordsToType(randomTexts[Math.floor(Math.random() * randomTexts.length)]);
  }

  function captureCurrentInput(typedLetter) {
    // only push to typedInput letters that are the same as ones in wordsToType
    setMistake((prev) => {
      return {
        ...prev,
        letter: null,
      };
    });

    if (typedLetter === wordsToType[typedInput.length]) {
      setTypedInput((prev) => [...prev, typedLetter]);
    } else {
      setMistake((prev) => {
        return {
          letter: typedInput.length,
          count: prev.count + 1,
        };
      });
    }
  }

  function changeTime(time) {
    setCountdown(time);
    setStaticTime(time);
    inputRef.current.focus();
  }

  function resetGame() {
    setTypedInput([]);
    setWordsToType("typer");
    setGameStarted(false);
    setMistake({ letter: null, count: 0 });
    setCountdown(30);
    setGameOver(false);
  }

  return (
    <main>
      {isMobile ? (
        <div className="mobileDiv">
          <p>Typer is best viewed on a desktop device.</p>
          <p>Visit us on a larger screen for the full experience.</p>
        </div>
      ) : (
        <>
          <MainGame
            wordsToType={wordsToType}
            typedInput={typedInput}
            currentLetter={currentLetter}
            gameStarted={gameStarted}
            mistake={mistake}
            countdown={countdown}
            gameOver={gameOver}
            changeTime={changeTime}
            completedWords={completedWords}
            mistakesCount={mistake.count}
            lettersCount={typedInput.length}
            staticTime={staticTime}
            resetGame={resetGame}
          />

          {!gameOver && (
            <HiddenInput
              inputRef={inputRef}
              captureCurrentInput={captureCurrentInput}
            />
          )}
        </>
      )}
    </main>
  );
}
