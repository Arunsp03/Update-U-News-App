import React, { useContext } from 'react'
import Querycontext from '../context/querycontext';
import { Link } from "react-router-dom";
export default function Wishlistnavbar() {
  const{
    mode
  }=useContext(Querycontext)
  return (
    <div>
          <nav className={`bg-black border-gray-200`}>
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
               <a href="" className="flex items-center">
                  <img
                     src="https://flowbite.com/docs/images/logo.svg"
                     className="h-6 mr-3 sm:h-9"
                     alt="Flowbite Logo"
                  />
                     <Link
                  to={"/home"}
                     className={`self-center text-xl font-semibold whitespace-nowrap text-white `}
                  >
                  Update-U
                  </Link>
               </a>
               <div className="flex items-center">
         
                  <Link
                     to={"/home"}
                     className="text-sm font-medium text-white "
                  >
                   Back to home
                  </Link>

         
               </div>
            </div>
         </nav>
    </div>
  )
}
