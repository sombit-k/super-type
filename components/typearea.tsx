"use client";
import { generateWords } from "@/lib/action";
import React, { useEffect, useState } from 'react'
const TypeArea = ({ id }: { id: string }) => {
  const [btnStates, setBtnStates] = useState({
    focus: false,
    start: false,
  });
  const [array, setArray] = useState<string[]>([]);
  const [index, iPlus] = useState<number>(0);
  const [wordIndex, wIPlus] = useState<number>(0);
  const [sentence, setSentence] = useState<string>("");
  const [focus, setFocus] = useState<boolean>(false);
  const [start, setStart] = useState<boolean>(false);
  const [correctKeyPressed, setCorrectKeyPressed] = useState<boolean>(false);
  const [hasStartedTyping, setHasStartedTyping] = useState<boolean>(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [totalTime, setTotalTime] = useState<number>(0);
  const [correctVector, setCorrectVector] = useState<number[][]>([]);
  const [mistakes, setMistakes] = useState<number>(0);
  const [end, setEnd] = useState<boolean>(false);


  useEffect(() => {
    const words = generateWords(id);
    console.log(words)

    setArray(words);
  }, [id]);

  useEffect(() => {
    setSentence(array.join(" "));
  }, [array]);



  useEffect(() => {
    setCorrectVector(array.map(word => Array(word.length).fill(0)));
  }, [array]);

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (hasStartedTyping && startTime && !end) {
      interval = setInterval(() => {
        setCurrentTime(Date.now() - startTime);
      }, 100); // Update every 100ms for smooth display
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [hasStartedTyping, startTime, end]);

  // Format time for display
  const formatTime = (ms: number): string => {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };


  const l = array.length;
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.value;
    if (value === "Focus") {
      setBtnStates((prev) => ({ ...prev, focus: !prev.focus }));
    } else if (value === "Start" && end) {
      // Restart the typing test
      setStart(true);
      setHasStartedTyping(false);
      setStartTime(null);
      setCurrentTime(0);
      setTotalTime(0);
      iPlus(0);
      wIPlus(0);
      setMistakes(0);
      setEnd(false);
      setCorrectKeyPressed(false);
      setCorrectVector(array.map(word => Array(word.length).fill(0)));
    }
  };

  useEffect(() => {
  }, [btnStates]);

  useEffect(() => {
    // console.log(formatTime(currentTime))
    if (end) {
      setStart(false)
      // setHasStartedTyping(false);
      setTotalTime(currentTime);
      console.log("Total time taken:", formatTime(currentTime));
      console.log("You have completed the typing test!");
      return;
    }

    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      const pressedKey = e.key;
      console.log("index is", index, "wordIndex is", wordIndex, "array[index][wordIndex] is", array[index][wordIndex]);

      // Mark that user has started typing
      if (!hasStartedTyping) {
        setStart(false);
        setHasStartedTyping(true);
        setStartTime(Date.now());
      }

      if (pressedKey === array[index][wordIndex] || (wordIndex === array[index].length)) {

        if (pressedKey === " ") {
          iPlus(index + 1);
          wIPlus(0);
          console.log("Entered if block");
          setCorrectKeyPressed(true);
          setCorrectVector((prev) => {
            const newVector = [...prev];
            newVector[index][wordIndex] = 1;
            return newVector;
          });
        }
        else if (pressedKey === array[index][wordIndex]) {
          if (index === array.length - 1 && wordIndex === array[index].length - 1) {
            setEnd(true);
          }
          console.log("Entered else 1st block");
          wIPlus(wordIndex + 1);
          setCorrectKeyPressed(true);
          // console.log("index is", index, "wordIndex is", wordIndex);

          setCorrectVector((prev) => {
            const newVector = [...prev];
            // console.log("new vector is", newVector);
            newVector[index][wordIndex] = 1;
            return newVector;
          });
        }
      }
      else {
        setCorrectKeyPressed(false);
        setMistakes((prev) => prev + 1);
      }
    };
    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, [array, sentence, index, correctVector, hasStartedTyping, currentTime]);

  return (
    <>
      <div className="flex flex-col h-4/5 bg-gray-800 text-amber-50 rounded-xl shadow-[0_0_1px_1px_gray] align-bottom ">


        <div className="flex  h-1/5 border-2 border-white-500 text-amber-50 m-3.5 justify-between rounded-xl shadow-xl-20 shadow-[0_0_6px_1px_white] px-5">
          <div className="flex flex-row-reverse content-bottom items-center text-xl ">
            {hasStartedTyping ? `Time: ${formatTime(currentTime)}` : "Time: 00:00"}
          </div>
          <p className="flex flex-row-reverse content-bottom items-center text-2xl ">
            {!hasStartedTyping ? "Start typing the text below!" :
              correctKeyPressed ? "😊" : "🤕"}
          </p>
          <div className="flex flex-row-reverse content-bottom items-center text-2xl ">
            Mistakes: {mistakes}
          </div>
        </div>
        <div className="flex flex-wrap h-4/5 border-2 border-white-500 bg-gray-800 text-amber-50 mx-3.5 my-3.5  rounded-xl shadow-xl-20 shadow-[0_0_6px_1px_white] px-5 py-5 overflow-auto ">
          {!end && Array.from({ length: l }).map((_, i) => (
            <div className='flex align-self-center max-h-7 my-1 mx-3 text-2xl' key={i}>
              {array[i].split("").map((char, idx) => (
                <span
                  key={idx}
                  className={
                    correctVector[i] && correctVector[i][idx] === 1 ? "bg-green-900" : ""
                  }
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </div>
          ))}

          {
            end &&
            <div>
              <div className="flex flex-col  items-start justify-center h-full">
                <h2 className="text-3xl font-bold mb-4">Typing Test Completed!</h2>
                <div className="text-2xl my-2">
                  <div>Total Time: {formatTime(totalTime)}</div>
                  <div className="text-2xl my-2">Mistakes: {mistakes}</div>
                  <div className="text-sm my-10">Click the restart button to start again!</div>
                </div>
              </div>
            </div>
          }

        </div>
      </div>
      <div className="  h-1/5 mx-3 my-3 flex justify-between items-center">
        <div className=" justify-center items-center mr-0">
          <button onClick={handleButtonClick} value="Focus" className="tbtn" key={id} >
            Focus Mode
          </button>
        </div>
        <div className="bg-black-100 mx-5">
          <button onClick={handleButtonClick} value="Start" className={end ? "tbtn" : "dtbtn"} key={id} >
            Restart
          </button>
        </div>
      </div>
    </>
  )
}

export default TypeArea