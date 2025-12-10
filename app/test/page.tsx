export default function TestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full transform transition duration-500 hover:scale-105">
        <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
          Tailwind CSS Test
        </h1>
        <p className="text-gray-700 text-center mb-6 text-lg">
          If you can see this styled correctly, Tailwind CSS is working!
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition duration-300 hover:scale-110">
            Button 1
          </button>
          <button className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition duration-300 hover:scale-110">
            Button 2
          </button>
        </div>
        <div className="mt-8 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
          <p className="text-yellow-700">
            <span className="font-bold">Note:</span> If you don't see colors and styles, try refreshing the page or clearing your browser cache.
          </p>
        </div>
      </div>
    </div>
  );
}