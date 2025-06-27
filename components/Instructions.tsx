import React from 'react'

const Instructions = ({ id }: { id: string }) => {
    return (
        <>
            <div className="flex flex-col h-full bg-gray-900 text-amber-50 rounded-xl shadow-[0_0_1px_1px_gray]">
                {/* <div className="grid grid-cols-4  gap-4 h-full border-2 border-white-500 text-amber-50 m-3.5  rounded-xl shadow-xl-20 shadow-[0_0_6px_1px_white]">

                    <div className="bg-pink-600 col-span-4 h-1/2 ">
                        01
                    </div>
                    <div className=" row-span-2">
                        <div className="bg-pink-800">02</div>

                        <div className="bg-pink-900">03</div>
                    </div>
                </div> */}


                <div className="flex flex-col gap-4 h-full border-2 border-white-500 text-amber-50 m-3.5  rounded-xl shadow-xl-20 shadow-[0_0_6px_1px_white]">

                    <div className="bg-pink-600  h-1/10 mx-3 mt-3">
                        Instructions
                    </div>
                    <div className="bg-pink-800 h-9/10 mx-3 mb-3">02</div>
                </div>

            </div>
        </>
    )
}

export default Instructions