"use server"
import React from 'react'
import Link from 'next/link'
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

                    <div className="bg-pink-600  h-1/10 mx-3 mt-3 flex justify-center items-center">
                        <div>
                            Instructions
                        </div>
                    </div>
                    <div className="flex flex-row bg-pink-800 h-7/10 mx-3 ">
                        <div className="w-1/2 bg-pink-600 p-3 border mr-0.5">
                        <h1>Some general Instructions to keep in mind:</h1>
                        <ul className="list-disc pl-5">
                            <li>Make sure to place the fingers on the correct orientation</li>
                            <li>Click on the Start button below to start this excercise</li>
                            <li>Timer will start automatically once the first letter is placed</li>
                            <li>Try finishing this exercise within 60 seconds with no mistakes before moving to the next exercise</li>
                            
                        </ul>

                        </div>
                        <div className="w-1/2 bg-pink-600 p-3 border ml-0.5">2</div>
                    </div>
                    <div className="bg-pink-600  h-1/10 mx-3 mb-3 flex justify-center items-center">
                        <div>
                            <Link href={`/practice/${id}`} className="lsnbtn" key={id} >
                                Start This excercise
                            </Link>
                        </div>
                    </div>

                </div>


            </div>
        </>
    )
}

export default Instructions