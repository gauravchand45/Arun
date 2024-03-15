import './utility.css'

function Navbar() {
  return (
    <div className="flex justify-between items-center p-10  mx-20 font-serif border-b-4 ">
        <div>
            <h1 className="text-7xl font-bold text-[#214559]  hover:scale-[1.04] text-left animate-slide-in-left ">Arun</h1>
        </div>
        <div className='text-right animate-slide-in-right'>
            <ul  className="flex gap-5 justify-center items-center text-xl text-gray-500">
                <a href="/"><li className="cursor-pointer hover:underline hover:text-gray-700">Photography</li></a>
                <a href="/"><li className="cursor-pointer hover:underline hover:text-gray-700">Books</li></a>
                <a href="/"><li className="cursor-pointer hover:underline hover:text-gray-700">Texts</li></a>
                <a href="/"><li className="cursor-pointer hover:underline hover:text-gray-700">Courses</li></a>
            </ul>
        </div>
    </div>
  )
}

export default Navbar