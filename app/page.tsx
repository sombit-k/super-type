import React from 'react';
import Link from 'next/link';
export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ key?: string }>;
}){

  const key = await searchParams.then((params) => params.key);
  console.log(key)
  return (
    <div className="flex align-middle bg-gray-500 min-h-screen ">
      <div className="grid grid-cols-5 gap-4 p-4 flex-none w-full min-h-screen">
        <div className="bg-gray-200 p-4 text-gray-800 rounded-lg shadow-md flex-none col-span-1">

          <p> objectives</p>
          <div className='flex  max-h-full  bg-amber-900 mt-7 py-2'>
            <div className="grid  overflow-y-auto max-h-100 w-full">
              {Array.from({ length: 10 }).map((_, i) => (
                <Link href={`/lesson/${i}`} className="lsnbtn" key={i} >
                  Lesson {i + 1 }
                </Link>
              ))}
            </div>
          </div>

        </div>
        <div className="bg-gray-200 p-4 bg text-gray-800 rounded-lg shadow-md col-span-3 col-start-2 gap-4">
          <div className="flex flex-col h-4/5 bg-amber-950 text-amber-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eveniet magnam tempore porro repellat molestias ipsa pariatur quibusdam, numquam ipsum odit maiores. Non at nobis nostrum. Adipisci quaerat magnam commodi?
          </div>
          <div className="flex flex-row h-1/5 bg-amber-950 text-amber-50 my-3.5 justify-around gap-4">
            <button className="">press me</button>
            <button className="">press me</button>
          </div>
        </div>

        <div className="bg-gray-200 p-4 text-gray-800 rounded-lg shadow-md">
          c</div>

      </div>
    </div>

  );
}
