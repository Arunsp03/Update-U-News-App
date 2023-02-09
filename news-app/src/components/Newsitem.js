import React, { useContext } from "react";
import Querycontext from "../context/querycontext";

export default function Newsitem(props) {
   const { mode } = useContext(Querycontext);

   async function savetowishlist(val) {
      const name = localStorage.getItem("name");

      const response = await fetch("http://localhost:3001/api/wishlist", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            name:localStorage.getItem('name'),
            title: val.title,
            img: val.urlToImage,
            source: val.author,
            description: val.description,
            link: val.url,
         }),
      });
      const data = await response.json();
      console.log(data);
   }

   return (
      <div
         className={`relative flex flex-col max-h-[500px] max-w-[430px] justify-center  text-center content-center   rounded-md p-10  bg-${
            mode === "black" ? "black" : "white"
         }  shadow-2xl shadow-gray-900-500/50`}
      >
         {/* <FontAwesomeIcon icon="fa-solid fa-book" /> */}
         <div>
            <img
               className=" relative max-w-[350px] max-h-[300px] rounded-md self-center "
               src={
                  props.data.urlToImage
                     ? props.data.urlToImage
                     : "https://www.shutterstock.com/image-vector/black-linear-photo-camera-logo-260nw-622639151.jpg"
               }
               alt=""
            />
            <button
               onClick={() => {
                  savetowishlist(props.data);
               }}
               className={` absolute  left-7 top-0 m-2 bg-${
                  mode === "black" ? "white" : "black"
               } text-${mode} font-extrabold py-2 px-4 rounded-full opacity-60 hover:opacity-100`}
            >
               Read later
            </button>
         </div>

         <div
            className={`  text-center flex flex-col items-start my-10 p-5 h-[100px]  w-[350px] justify-center content-center text-${
               mode === "white" ? "black" : "white"
            } `}
         >
            <a href={props.data.url} target="_blank">
               <h2 className="font-bold text-lg break-normal ">
                  {props.data.title}
               </h2>
            </a>
            <h3 className="font-sm text-base break-normal text-gray-500">
               Published At : {props.data.publishedAt}
            </h3>
            {/* <p className=''>{props.data.description}</p> */}
         </div>
      </div>
   );
}
