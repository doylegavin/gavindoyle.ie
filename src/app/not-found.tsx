import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto px-4">
        {/* Netflix-style 404 */}
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-red-600 mb-4">404</h1>
          <h2 className="text-3xl font-semibold mb-4">Lost in the code?</h2>
          <p className="text-xl text-gray-300 mb-8">
            This page doesn't exist, but my projects definitely do.
          </p>
        </div>

        {/* Navigation options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Link 
            href="/" 
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded transition-colors"
          >
            ← Back Home
          </Link>
          <Link 
            href="/projects" 
            className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded transition-colors"
          >
            View Projects
          </Link>
          <Link 
            href="/contact" 
            className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded transition-colors"
          >
            Get In Touch
          </Link>
        </div>

        {/* Fun message */}
        <div className="text-gray-400">
          <p className="mb-2">
            "There are only 10 types of people in the world: those who understand binary and those who don't."
          </p>
          <p className="text-sm">
            — Every developer's favorite joke (including mine)
          </p>
        </div>

        {/* Persona quick links */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-400 mb-4">Or pick your vibe:</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/employers" className="text-blue-400 hover:text-blue-300 transition-colors">
              💼 Employers
            </Link>
            <Link href="/fans" className="text-purple-400 hover:text-purple-300 transition-colors">
              🎭 Fans
            </Link>
            <Link href="/suitors" className="text-pink-400 hover:text-pink-300 transition-colors">
              💕 Suitors
            </Link>
            <Link href="/curious" className="text-yellow-400 hover:text-yellow-300 transition-colors">
              🕵️ Curious
            </Link>
            <Link href="/techies" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              ⚡ Techies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


