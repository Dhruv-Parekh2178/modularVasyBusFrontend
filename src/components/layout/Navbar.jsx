import { Link } from "react-router-dom"


const Navbar = () => {
  return (
     <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">

          <Link to="/" className="flex items-center gap-2 text-xl font-bold tracking-wide">
            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
              <i className="ri-bus-fill text-white text-lg" />
            </div>
            VasyBus
          </Link>

        </div>
      </div>
    </nav>
  )
}

export default Navbar
