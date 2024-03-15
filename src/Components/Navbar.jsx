import './utility.css'

function Navbar() {
  return (
    <div className="md:flex justify-between items-center p-5 md:p-10  md:mx-20 font-serif border-b-4 ">
        <div className="text-center md:text-left animate-slide-in-left">
          <div className=' hover:scale-125 transition-transform duration-300"'>
            <h1 className="text-4xl md:text-7xl font-bold text-[#214559]  ">Arun</h1>
          </div>
        </div>
        <div className='mt-5 md:mt-0 text-center md:text-right animate-slide-in-right'>
            <ul  className="flex gap-5 justify-center items-center text-xl text-gray-500">
                <a href=""><li className="cursor-pointer hover:underline hover:text-gray-700">Photography</li></a>
                <a href=""><li className="cursor-pointer hover:underline hover:text-gray-700">Books</li></a>
                <a href=""><li className="cursor-pointer hover:underline hover:text-gray-700">Texts</li></a>
                <a href=""><li className="cursor-pointer hover:underline hover:text-gray-700">Courses</li></a>
            </ul>
        </div>
    </div>
  )
}

export default Navbar