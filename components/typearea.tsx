"use client";
import { generateWords } from "@/lib/action";
import React, { useEffect, useState } from 'react'
const TypeArea = ({ id }: { id: string }) => {
  console.log("id is", id)

  const array = generateWords(id);
  const l = 72;

  // Use useState instead of useActionState
  const [btnStates, setBtnStates] = useState({
    focus: false,
    start: false,
  });

  // Handler for button clicks
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

  return (
    <>
      <div className="flex flex-col h-4/5 bg-gray-800 text-amber-50 rounded-xl shadow-[0_0_1px_1px_gray]">
        <div className="flex  h-1/5 border-2 border-white-500 text-amber-50 m-3.5 justify-around rounded-xl shadow-xl-20 shadow-[0_0_6px_1px_white]">
          <p>hi</p>
        </div>
        <div className="flex flex-wrap h-4/5 border-2 border-white-500 bg-gray-800 text-amber-50 mx-3.5 my-3.5  rounded-xl shadow-xl-20 shadow-[0_0_6px_1px_white] px-5 py-5 overflow-auto ">
          {Array.from({ length: l - 1 }).map((_, i) => (
            <div className='flex align-self-center max-h-5 my-1' key={i}>
              {array[i] + "\u00A0"}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row h-1/5 bg-amber-950 text-amber-50 my-3.5 justify-around gap-4">
        <button type="button" name="action" value="Focus" onClick={handleButtonClick}>Focus Mode</button>
        <button type="button" name="action" value="Start" onClick={handleButtonClick}>Start Exercise</button>
      </div>
    </>
  )
}

export default TypeArea