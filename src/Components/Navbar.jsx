

function Navbar() {
  return (
    <div className="flex justify-between items-center p-8 border">
        <div>
            <h1 className="text-6xl ml-6">Arun</h1>
        </div>
        <div>
            <ul  className="flex gap-4 justify-center items-center">
                <li>Projects</li>
                <li>Photography</li>
                <li>Books</li>
                <li>Texts</li>
                <li>Blogs</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar