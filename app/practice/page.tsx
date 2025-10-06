import TypeArea from '@/components/typearea';
import Link from 'next/link';
import Sidebar from '@/components/sidebar';
import Dashboard from '@/components/dashboard';

export default function PracticePage() {
  return (
    <div className="flex align-middle min-h-screen bg-slate-950">
      <div className="grid grid-cols-5 gap-4 p-4 flex-none w-full min-h-screen">
        {/* Sidebar */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 p-4 text-gray-800 rounded-lg shadow-md flex-none col-span-1">
          <div className="my-0 mr-3 flex flex-col items-center justify-center font-bold text-white mb-4">
            <Link 
              href="/" 
              className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 mb-4"
            >
              ← Home
            </Link>
            <div className="text-amber-400">Choose a Lesson</div>
          </div>
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 p-4 text-gray-800 rounded-lg shadow-md col-span-3 col-start-2">
          <div className="text-center text-white mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-4">
              Practice Mode
            </h1>
            <p className="text-slate-300">
              Select a lesson from the sidebar to start practicing your typing skills.
            </p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-8 text-center border border-slate-600">
            <div className="text-6xl mb-4">⌨️</div>
            <p className="text-slate-400 text-lg">
              Choose a lesson to begin your typing journey!
            </p>
          </div>
        </div>

        {/* Dashboard */}
        <Dashboard />
      </div>
    </div>
  );
}