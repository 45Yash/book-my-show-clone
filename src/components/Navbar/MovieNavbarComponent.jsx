import React , {useContext} from 'react';
import { BiChevronDown, BiMenu, BiSearch, BiShareAlt } from "react-icons/bi";
import { MovieContext } from "../../context/Movie.context";


const NavSm = () => {
  const { movie } = useContext(MovieContext);
  return (
    <>
      <div className="text-gray-700 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">{movie.original_title}</h3>
        </div>
      </div>
      <div className="w-8 h-8">
        <BiShareAlt className="w-full h-full" />
      </div>
    </>
  );
};

const NavLg = () => {
  return (
    <>
      <div className="container flex mx-auto px-4 items-center justify-evenly">
        <div className="flex items-center w-1/2 gap-3">
          <div className="w-40 h-20">
            <img src="https://clevertap.com/wp-content/uploads/2019/09/L_Media-21.png" alt="logo" className="w-full h-full" />
          </div>
          <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md border border-black-500">
            <BiSearch />
            <input
              type="search"
              className="w-full bg-transparent border-none focus: outline-none"
              placeholder="Search for movies, events, plays, sports and activites"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-black-200 text-base flex items-center cursor-pointer hover:text-black">
            Baramati <BiChevronDown />
          </span>
          <button className="bg-red-500 text-white px-2 py-1 text-sm rounded  ">
            Sign In
          </button>
          <div className="w-8 h-8 text-black">
            <BiMenu className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
};

const MovieNavbar = () => {
  return (
    <>
      <nav className="bg-white border-b-2 lg:border-b-0  p-4">
        {/* Small Screen Size */}
        <div className="md:hidden">
          <NavSm />
        </div>
        {/* Only on Large Screen Size */}
        <div className="hidden w-full lg:flex">
          <NavLg />
        </div>
      </nav>
    </>
  );
    
  
}

export default MovieNavbar;