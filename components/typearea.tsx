"use client";
import { generateWords } from "@/lib/action";
import Link from "next/link";
import React, { useEffect, useState } from 'react'
const TypeArea = ({ id }: { id: string }) => {





  const [btnStates, setBtnStates] = useState({
    focus: false,
    start: false,
  });
  const [array, setArray] = useState<string[]>([]);
  const [i,iPlus]=useState<number>(0);
  const [sentence, setSentence] = useState<string>("");



  useEffect(() => {
    const words = generateWords(id);
    console.log(words)

    setArray(words);
  }, [id]);

  useEffect(() => {
    setSentence(array.join(" "));
  },[array]);

  const l = array.length;
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.value;
    if (value === "Focus") {
      setBtnStates((prev) => ({ ...prev, focus: !prev.focus }));
    } else if (value === "Start") {
      setBtnStates((prev) => ({ ...prev, start: !prev.start }));
    }
  };

  useEffect(() => {
    console.log("Button states", btnStates);
  }, [btnStates]);

  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      // console.log("Global key pressed:", e.key);
      const pressedKey = e.key;
      // console.log("pressed key is", pressedKey,"sentence",sentence)
      if(pressedKey === sentence[i]) {
        iPlus(i + 1);
        console.log("Correct key pressed:", pressedKey);
      }
      else{
        console.log("Incorrect key pressed:", pressedKey,"i value is",i,"sentence[i] is",sentence[i]);
      }
    };
    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, [array,sentence,i]);

  return (
    <>
      <div className="flex flex-col h-4/5 bg-gray-800 text-amber-50 rounded-xl shadow-[0_0_1px_1px_gray] align-bottom ">
        <div className="flex  h-1/5 border-2 border-white-500 text-amber-50 m-3.5 justify-center rounded-xl shadow-xl-20 shadow-[0_0_6px_1px_white]">
          <p className="flex flex-row-reverse content-bottom items-center">Start typing the text below!</p>
        </div>
        <div className="flex flex-wrap h-4/5 border-2 border-white-500 bg-gray-800 text-amber-50 mx-3.5 my-3.5  rounded-xl shadow-xl-20 shadow-[0_0_6px_1px_white] px-5 py-5 overflow-auto ">
          {Array.from({ length: l - 1 }).map((_, i) => (
            <div className='flex align-self-center max-h-5 my-1 mx-3 text-2xl' key={i}>
              {array[i] + "\u00A0"}
            </div>
          ))}
        </div>
      </div>
      <div className="  h-1/5 mx-3 my-3 flex justify-between items-center">
        <div className=" justify-center items-center mr-0">
          <button onClick={handleButtonClick} value="Focus" className="lsnbtn w-full justify-center items-center bg-green-800 text-white hover:bg-gray-700 transition-colors duration-100 text-center mx-0" key={id} >
            Focus Mode
          </button>
        </div>
        <div className="bg-black-100 mx-5">
          <button onClick={handleButtonClick} value="Start" className="lsnbtn w-full justify-center items-center bg-green-800 text-white hover:bg-gray-700 transition-colors duration-100 text-center mx-5" key={id} >
            Restart
          </button>
        </div>
      </div>
    </>
  )
}

export default TypeArea