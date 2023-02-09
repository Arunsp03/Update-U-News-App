import React from "react";
import { Link } from "react-router-dom";
import Querycontext from "../context/querycontext";
import { useContext } from "react";

export default function Navbar() {
   const {
      url,
      category,
      sortby,
      wishlist,
      setwishlist,
      setcategory,
      setsortby,
      articles,
      Setmode,
      seturl,
      search,
      mode,
      Setsearch,
   } = useContext(Querycontext);
   function logout(){
      localStorage.removeItem('token');
      localStorage.removeItem('name');
      window.location.href="/login";
   }
   
   function darktoggle() {
      console.log(mode);
      Setmode(prev => (prev === "white" ? "black" : "white"));
   }
   return (
      
      <div className={`bg-black`}>
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
                  <label className="relative inline-flex items-center mr-5 cursor-pointer">
                     <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                        onClick={() => {
                           darktoggle();
                        }}
                     />
                     <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"></div>
                     <span
                        className={`ml-3 text-sm font-medium text-white`}
                     >
                        Toggle mode
                     </span>
                   
                  </label>
                  <Link
                     to={"/wishlist"}
                     className="text-sm font-medium text-white "
                  >
                   Wishlist 
                  </Link>
                  <Link
                     to={"/login"}
                     className="mx-2 text-sm font-medium text-white "
                  onClick={logout} >
                   Logout 
                  </Link>

         
               </div>
            </div>
         </nav>
      </div>
   );
}
