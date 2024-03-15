
function Courses() {
    return (
        <div className="w-[100%] flex flex-col md:flex-row justify-center items-center p-10 border-b-4">
            <div className="text-2xl md:text-5xl p-12 text-left animate-slide-in-left w-full md:w-1/2 md:order-1">
                Now, as I step back from the frontline, my mission remains unchanged: to impart the wisdom gained through years of experience to the next generation of truth-seekers. <span className="text-blue-700">Join me on this journey</span> of discovery, as we unlock the secrets of journalism together.
            </div>
            <div className="w-full md:w-1/2 md:order-2">
                <h1 className=" text-4xl md:text-6xl underline font-medium text-center mb-12">My Course</h1>
                <a href="/">
                    <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-14 bg-gray-100 rounded-md py-8 md:py-16">
                    <div className="bg-white rounded-md flex justify-center items-center flex-col border-2  border-solid border-gray-300 p-4 w-full md:w-1/2 hover:scale-105 transition-transform duration-1000 cursor-pointer">
                        <img className="w-full rounded-md" src="https://images.pexels.com/photos/1766604/pexels-photo-1766604.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <div className="mt-4">
                            <p className="font-semibold underline">Insider's Insight: Mastering Journalism</p>
                            <p className="font-semibold mt-2">Skills You gain: <span className="font-normal">Journalism, Communication</span></p>
                            <p className="font-semibold mt-2 flex items-center">
                                <div className="flex relative left-[-8px]">
                                    <img className="w-7 mr-2" src="https://img.freepik.com/free-vector/start_53876-25533.jpg?size=626&ext=jpg" alt="" />
                                    <span>4.9 <span className="font-normal">(2k Reviews)</span></span>
                                </div>
                            </p>
                            <p >Beginner Course: 1-2 weeks</p>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 mt-8 md:mt-0">
                        <ul className="list-disc pl-8">
                            <li className="text-xl md:text-2xl mb-4"><span className="text-[#001f3f] font-semibold underline">Seasoned Expertise:</span> <span className="text-gray-600">Learn from Mr. Arun's decades-long experience in journalism.</span></li>
                            <li className="text-xl md:text-2xl mb-4"><span className="text-[#001f3f] font-semibold underline">Practical Insights:</span> <span className="text-gray-600">Gain hands-on knowledge applicable to real-world journalism.</span></li>
                            <li className="text-xl md:text-2xl mb-4"><span className="text-[#001f3f] font-semibold underline">Networking Opportunities:</span> <span className="text-gray-600">Connect with peers and professionals in the field.</span></li>
                            <li className="text-xl md:text-2xl"><span className="text-[#001f3f] font-semibold underline">Investment in Your Future:</span> <span className="text-gray-600">Invest in your career growth and impact as a journalist.</span></li>
                        </ul>
                    </div>
                </div></a>
            </div>
        </div>
    )
}

export default Courses