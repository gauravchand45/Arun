import AboutMe from "./Components/AboutMe"
import Contact from "./Components/Contact"
import Courses from "./Components/Courses"
import Navbar from "./Components/Navbar"

function App() {

  return (
    <div className="[background-color:#e0e0da] font-serif">
      <Navbar />
      <AboutMe />
      <Courses/>
      <Contact/>
    </div>
  )
}

export default App
