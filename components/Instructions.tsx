import React from 'react'

const Instructions = ({ id }: { id: string }) => {
    return (
        <>
            <div className="flex flex-col h-4/5 bg-gray-800 text-amber-50 rounded-xl shadow-[0_0_1px_1px_gray]">
                <div className="flex  h-4/5 border-2 border-white-500 text-amber-50 m-3.5 justify-around rounded-xl shadow-xl-20 shadow-[0_0_6px_1px_white]">
                    <p>hi</p>
                </div>

            </div>





            <div className="flex flex-row h-1/5 bg-amber-950 text-amber-50 my-3.5 justify-around gap-4">
                {/* <button type="button" name="action" value="Focus" onClick={handleButtonClick}>Focus Mode</button>
        <button type="button" name="action" value="Start" onClick={handleButtonClick}>Start Exercise</button> */}
            </div>
        </>
    )
}

export default Instructions