import React from 'react'
import Link from 'next/link'
const TypeArea = ({id}:{id?:string}) => {
  console.log("id is",id)

  const array = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae delectus atque quidem nostrum molestiae ipsum, nemo quasi facilis culpa iorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae delectus atque quidem nostrum molestiae ipsum, nemo quasi facilis culpa iorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae delectus atque quidem nostrum molestiae ipsum, nemo quasi facilis culpa iorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae delectus atque quidem nostrum molestiae ipsum, nemo q";
  const l = array.length;
  return (
    <>
      <div className="flex flex-col h-4/5 bg-gray-800 text-amber-50 rounded-xl shadow-[0_0_1px_1px_gray]">
        <div className="flex  h-1/5 border-2 border-white-500 text-amber-50 m-3.5 justify-around rounded-xl shadow-xl-20 shadow-[0_0_6px_1px_white]">
    <p>hi</p>
        </div>
        <div className="flex flex-wrap h-4/5 border-2 border-white-500 bg-gray-800 text-amber-50 mx-3.5 my-3.5  rounded-xl shadow-xl-20 shadow-[0_0_6px_1px_white] px-5 py-5 overflow-auto ">
          

          {Array.from({ length: l-1 }).map((_, i) => (
  <div className='flex align-self-center max-h-5 my-1 bg-amber-800' key={i}>
    {array[i] === " " ? "\u00A0" : array[i]}
  </div>
))}


        </div>
      </div>
      <div className="flex flex-row h-1/5 bg-amber-950 text-amber-50 my-3.5 justify-around gap-4">
        <button className="">press me</button>
        <button className="">press me</button>
      </div>
    </>
  )
}

export default TypeArea