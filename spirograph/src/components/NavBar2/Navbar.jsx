import { navLists } from '../../constants'
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar-fixed">
    <header className="w-full py-5 sm:px-10 px-5 flex justify-start items-center">
        
        <div className="flex flex-1 justify-start max-sm:hidden">
          {navLists.map((nav) =>
             (<div key={nav} className="px-5 text-sm cursor-pointer text-white hover:animate-pulse">
              {nav}  
             </div>))}
        </div>

    </header>
    </header>
  )
}

export default Navbar;
