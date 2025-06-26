import React from 'react'

const Tutorial = () => {
  return (
    <>
      <div className="flex flex-col h-4/5 bg-amber-950 text-amber-50">
        Learn how to type
      </div>
      <div className="flex flex-row h-1/5 bg-amber-950 text-amber-50 my-3.5 justify-around gap-4">
        <button className="">press me</button>
        <button className="">press me</button>
      </div>
    </>
  )
}

export default Tutorial