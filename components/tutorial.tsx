import React from 'react'

const Tutorial = ({ id }: { id?: number }) => {
  return (
    <>
      <div className="flex flex-col h-4/5 bg-amber-950 text-amber-50">
        {id === 0 && <p>Learn how to type {id}</p>}
      </div>
      
      <div className="flex flex-row h-1/5 bg-amber-950 text-amber-50 my-3.5 justify-around gap-4">
        <button className="">press me</button>
        <button className="">press me</button>
      </div>
    </>
  )
}

export default Tutorial