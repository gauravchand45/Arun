

function AboutMe() {
  return (
    <div className="[background-color:#e0e0da] flex flex-col items-center p-10 border-b-4 md:flex-row">
      <div className="flex justify-center text-left animate-slide-in-left mb-8 md:mb-0">
        <img className="rounded-md w-[80%] md:w-[80%]" src="https://images.pexels.com/photos/7935689/pexels-photo-7935689.jpeg?auto=compress&cs=tinysrgb&w=600" alt="profilePhoto" />
      </div>
      <div className="w-full md:w-[50%] h-auto text-left animate-slide-in-right">
        <p className="text-2xl md:text-4xl font-serif">
          Hi! <span className="">👋</span><br /><p className="text-gray-500 font-normal">I'm <span className=" text-[#001f3f] ">Arun</span>. With a career spanning decades, I've stood witness to the ever-evolving <span className="text-[#001f3f]">landscape of journalism</span>, from the clatter of typewriters to the <span className="text-[#001f3f]">digital revolution</span>  that now shapes our world. From <span className="text-[#001f3f]" >war zones</span> to <span className="text-[#001f3f]">political arenas</span>, I've dedicated my life to unraveling the complexities of our times, shining a light on the stories that matter most.
          </p>
        </p>
      </div>
    </div>
  )
}

export default AboutMe