import { useEffect, useMemo, useRef, useState } from "react";
import Button from "./components/Button";
import ColorCard from "./components/ColorCard";
import Container from "./components/Layout/Container";
import getColors from "./lib/getColors";

const TIMEOUT_DURATION = 1500;

function App() {
  const [colors, setColors] = useState<string[]>(getColors());
  const [answer, setAnswer] = useState<string>();
  const [score, setScore] = useState(0);
  const [isRoundFinished, setIsRoundFinished] = useState(false);
  const timeoutRef = useRef<number>();

  const solution = useMemo(
    () => colors[Math.floor(Math.random() * colors.length)],
    [colors]
  );

  const handleClick = (color: string) => {
    setAnswer(color);
  };

  useEffect(() => {
    if (answer) {
      setIsRoundFinished(true);

      if (answer == solution) {
        setScore((score) => score + 1);
      } else {
        setScore(0);
      }

      timeoutRef.current = setTimeout(() => {
        setColors(getColors());
        setIsRoundFinished(false);
      }, TIMEOUT_DURATION);
    }

    () => clearTimeout(timeoutRef.current);
  }, [answer]);

  return (
    <Container>
      <div className="text-transparent text-6xl text-center mb-12 bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500">
        <span className="font-bold">Color</span>
        <span className="font-thin italic">Guesser</span>
      </div>
      <div className="flex items-center justify-end text-slate-600 text-3xl mb-6">
        Score: {score}
      </div>
      <ColorCard color={solution} />
      <div className="flex flex-wrap gap-5 justify-between">
        {colors.map((color) => {
          const buttonStatus = color === solution ? "correct" : "wrong";

          return (
            <Button
              key={color}
              handleClick={() => handleClick(color)}
              disabled={isRoundFinished}
              status={buttonStatus}
              shouldShowStatus={isRoundFinished}
            >
              {color}
            </Button>
          );
        })}
      </div>
    </Container>
  );
}

export default App;
