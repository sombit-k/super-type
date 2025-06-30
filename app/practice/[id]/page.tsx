import TypeArea from '@/components/typearea';
import Link from 'next/link';
import Sidebar from '@/components/sidebar';
import Tutorial from '@/components/tutorial';
import Dashboard from '@/components/dashboard';
export default async function LessonPage({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;

  return (<>
  <div className="flex align-middle min-h-screen bg-dark4-500">
      <div className="grid grid-cols-5 gap-4 p-4 flex-none w-full min-h-screen">

        <div className="bg-dark1-500 p-4 text-gray-800 rounded-lg shadow-md flex-none col-span-1">

          <div className="mb-2 flex flex-col items-center justify-center  font-bold text-white">
          <Link href={`/`} className="lsnbtn px-10" key={"home"} >
                  Home
                </Link>
          </div>
          <Sidebar />

        </div>


        <div className="bg-dark1-500 p-4 bg text-gray-800 rounded-lg shadow-md col-span-3 col-start-2 gap-4">
          <TypeArea id={id} />
        </div>

        <Dashboard/>

      </div>
    </div>
  </> )
}