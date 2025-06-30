import React from 'react';
import Link from 'next/link';
import Sidebar from '@/components/sidebar';
import TypeArea from '@/components/typearea';
import Tutorial from '@/components/tutorial';
import Dashboard from '@/components/dashboard';
export default async function Home() {

  return (
    <div className="flex align-middle bg-dark1-500 min-h-screen ">
      <div className="grid grid-cols-5 gap-4 p-4 flex-none w-full min-h-screen">

        <div className="bg-dark1-500 p-4 text-gray-800 rounded-lg shadow-md flex-none col-span-1 border-1 border-amber-50">

          <div className="my-0 mr-3 flex flex-col items-center justify-center  font-bold text-white">
            Start Practice!
          </div>
          <Sidebar />

        </div>


        
        <div className="bg-dark1-500 p-4 bg text-gray-800 rounded-lg shadow-md col-span-3 col-start-2 gap-4 border-1 border-amber-50">
          <Tutorial />
        </div>

        <Dashboard />

      </div>
    </div>

  );
}
