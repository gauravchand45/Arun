import './utility.css'

function Navbar() {
  return (
    <div className="md:flex justify-between items-center p-5 md:p-10  md:mx-20 font-serif border-b-4 ">
        <div class="text-center md:text-left">
            <h1 className="text-4xl md:text-7xl font-bold text-[#214559]  hover:scale-[1.04] animate-slide-in-left ">Arun</h1>
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