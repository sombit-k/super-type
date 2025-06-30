import React from 'react'
import Link from 'next/link'
const Sidebar = () => {
  return (
    <div className='flex  max-h-full mt-5 py-2'>
            <div className="grid  overflow-y-auto max-h-100 w-full">
              {Array.from({ length: 15 }).map((_, i) => (
                <Link href={`/lesson/${i+1}`} className="lsnbtn" key={i} >
                  Lesson {i + 1 }
                </Link>
              ))}
            </div>
          </div>
  )
}

export default Sidebar