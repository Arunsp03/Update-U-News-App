import { useContext, useEffect } from "react";
import React, { useState } from "react";
import Newsitem from "./Newsitem";
import Querycontext from "../context/querycontext";
import Login from "./Login";
import Popularitem from "./Popularitem";

export default function News(props) {
   const {
      url,
      allarticles,
      setAllArticles,
      category,
      sortby,
      setcategory,
      setsortby,
      articles,
      Setmode,
      wishlist,
      setwishlist,
      Seturl,
      country,
      setcountry,
      search,
      mode,
      Setsearch,
   } = useContext(Querycontext);

   function handlesearch(e) {
      Setsearch(e.target.value);
   }
   const filteredarticles = allarticles.filter(ele =>
      ele.description.toLowerCase().includes(search.toLowerCase())
   );

   function handlecountry(e) {
      setcountry(e.target.value);
      // Seturl(`https://newsapi.org/v2/everything?q=${category}&from=2023-01-31&to=2023-01-31&sortBy=${sortby}&apiKey=9e3d4fcaa46f4d52be9dcdba31beadcb`)
   }

   function handlecategory(value) {
      setcategory(value);
      //console.log(category);
      //console.log(value);
      // Seturl(`https://newsapi.org/v2/everything?q=${category}&from=2023-01-31&to=2023-01-31&sortBy=${sortby}&apiKey=9e3d4fcaa46f4d52be9dcdba31beadcb`)
   }
   //  useEffect(() => {
   //     console.log(props.sortby);
   //     seturl(
   //        `https://newsapi.org/v2/everything?q=${props.category}&from=2023-02-02&to=2023-02-02&sortBy=${props.sortby}&apiKey=9e3d4fcaa46f4d52be9dcdba31beadcb`
   //     );
   //  }, [props.category, props.sortby]);

   return (
      <div>
         <nav
            className={`bg-${
               mode === "black" ? "black" : "white"
            } border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-${
               mode === "black" ? "black" : "white"
            }`}
         >
            <div className="container flex flex-wrap items-center justify-between mx-auto">
               <div className="flex md:order-2">
                  <button
                     type="button"
                     data-collapse-toggle="navbar-search"
                     aria-controls="navbar-search"
                     aria-expanded="false"
                     className="md:hidden text-gray-500 border-white dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
                  >
                     <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           fillRule="evenodd"
                           d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                           clipRule="evenodd"
                        ></path>
                     </svg>

                     <span className="sr-only">Search</span>
                  </button>

                  <button
                     data-collapse-toggle="navbar-search"
                     type="button"
                     className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                     aria-controls="navbar-search"
                     aria-expanded="false"
                  >
                     <span className="sr-only">Open menu</span>
                     <svg
                        className="w-6 h-6"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           fillRule="evenodd"
                           d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                           clipRule="evenodd"
                        ></path>
                     </svg>
                  </button>
               </div>
               <div
                  className="items-center border-white justify-between hidden w-full md:flex md:w-auto md:order-1"
                  id="navbar-search"
               >
                  <div className="relative mt-3 md:hidden">
                     <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                           className="w-5 h-5 text-gray-500"
                           aria-hidden="true"
                           fill="currentColor"
                           viewBox="0 0 20 20"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              fillRule="evenodd"
                              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                              clipRule="evenodd"
                           ></path>
                        </svg>
                     </div>
                     <input
                        type="text"
                        id="search-navbar"
                        className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search..."
                     />
                  </div>
                  <ul className=" flex flex-col p-4 mt-4 border rounded-lg border-white  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                     <li>
                        <a
                           href="#"
                           className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 "
                           name="category"
                           value="general"
                           onClick={() => {
                              handlecategory("general");
                           }}
                        >
                           General
                        </a>
                     </li>
                     <li>
                        <a
                           href="#"
                           className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 "
                           name="category"
                           value="business"
                           onClick={() => {
                              handlecategory("business");
                           }}
                        >
                           Business
                        </a>
                     </li>
                     <li>
                        <a
                           href="#"
                           className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 "
                           name="category"
                           value="entertainment"
                           onClick={() => {
                              handlecategory("entertainment");
                           }}
                        >
                           Entertainment
                        </a>
                     </li>
                     <li>
                        <a
                           href="#"
                           className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 "
                           name="category"
                           value="sports"
                           onClick={() => {
                              handlecategory("sports");
                           }}
                        >
                           Sports
                        </a>
                     </li>
                     <li>
                        <a
                           href="#"
                           className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 "
                           name="category"
                           value="technology"
                           onClick={() => {
                              handlecategory("technology");
                           }}
                        >
                           Technology
                        </a>
                     </li>
                     <li>
                        <a
                           href="#"
                           className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 "
                           name="category"
                           value="health"
                           onClick={() => {
                              handlecategory("health");
                           }}
                        >
                           health
                        </a>
                     </li>
                     <li>
                        <div className="relative w-full lg:max-w-sm ">
                           <select
                              onChange={e => handlecountry(e)}
                              className="  bg-black text-white   rounded-md  shadow-sm outline-none appearance-none focus:border-indigo-600 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
                           >
                              <option value="">Select Country</option>
                              <option value="in">INDIA</option>
                              <option value="us">USA</option>
                              <option value="br">Britain</option>
                              <option value="cn">China</option>
                              <option value="jp">Japan</option>
                              <option value="ru">Russia</option>
                              <option value="de">denmark</option>
                              <option value="it">Italy</option>
                           </select>
                        </div>
                     </li>
                  </ul>
               </div>
               {/* <div className="relative w-full lg:max-w-sm ">
                  <select
                     onChange={e => handlesort(e)}
                     className="w-full p-2.5 bg-black text-white  border rounded-md border-white shadow-sm outline-none appearance-none focus:border-indigo-600 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
                  >
                     <option value="popularity">Sort by Popularity</option>
                     <option value="relevancy">Sort by relevance</option>
                     <option value="publishedAt">Sort by publishedAt</option>
                  </select>
               </div> */}
            </div>
         </nav>

         <div
            className={`bg-${mode} lg:flex-row lg:flex lg:justify-start lg:items-start  md:flex-col sm:flex-col `}
         >
            <div
               className={`bg-${
                  mode === "black" ? "black" : "white"
               } m-5 grid grid-cols-2 bordergap-4 shadow-xl shadow-gray-900-500/50  `}
            >
               {articles.map((item, i) => {
                  return <Newsitem data={item} key={item.title + `${i}`} />;
               })}
            </div>
            <div
               className={`shadow-red-500-500/50  bg-${
                  mode === "black" ? "black" : "white"
               } flex flex-col   `}
            >
               <div className="relative hidden md:block ">
                  <h2
                     className={`text-2xl font-extrabold text-${
                        mode === "black" ? "white" : "black"
                     }`}
                  >
                     Search Latest Headlines
                  </h2>

                  <input
                     type="text"
                     id="search-navbar"
                     className="block w-full p-2 pl-10 text-sm text-gray-900 border rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                     placeholder="Search Headlines"
                     name="searchbar"
                     value={search}
                     onChange={handlesearch}
                  />
               </div>
               {filteredarticles.map((item, i) => {
                  return <Popularitem data={item} key={item.title + `${i}`} />;
               })}
            </div>
         </div>
      </div>
   );
}
