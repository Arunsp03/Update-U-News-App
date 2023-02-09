import React, { useContext } from "react";
import { useState } from "react";
import Axios from "axios";
import Querycontext from "../context/querycontext";
export default function Login(props) {
   const { username, setusername } = useContext(Querycontext);
   const [name, setname] = useState("");
   const [password, setpassword] = useState("");

   async function loginuser(event) {
      event.preventDefault();
      const response = await fetch("http://localhost:3001/api/login", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            name,
            password,
         }),
      });

      if (response) {
         const data = await response.json();
   
         if(data.success===true){
         
        localStorage.setItem('token',data.token)        }
            
       
        console.log(data.success);
        console.log(data.token);
        localStorage.setItem('name',data.user.name);
         window.location.href="/home"
      } else {
         alert("wrong password or username");
      }
   }

   // const loginuser= () => {
   //     Axios({
   //       method: "POST",
   //       data: {
   //         name: name,
   //         password: password,
   //       },
   //       withCredentials: true,
   //       url: "http://localhost:3001/api/login",
   //     }).then((res) => console.log(res));
   //   };
   // async function loginuser (event){
   //     event.preventDefault();
   //     const response=await fetch('http://localhost:3001/api/login',{
   //         method:"POST",
   //         headers:{
   //             'Content-Type':'application/json',
   //         },
   //         body:JSON.stringify({

   //             email,
   //             password,

   //         })
   //     })
   //     const data=await response.json();
   //     if(data.user){
   //         alert('login successfull')
   //         window.location.href='/'
   //     }
   //     else{
   //         alert('login unsuccessfull')
   //         window.location.href='/login'
   //     }
   //}
   return (
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
         <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-purple-600 lg:max-w-xl">
            <h1 className="text-3xl font-semibold text-center text-purple-700">
               Sign in
            </h1>
            <form onSubmit={loginuser} className="mt-6">
               <div className="mb-2">
                  <label
                     for="name"
                     className="block text-sm font-semibold text-gray-800"
                  >
                     name
                  </label>
                  <input
                     name="name"
                     value={name}
                     type="text"
                     onChange={e => setname(e.target.value)}
                     className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
               </div>
               <div className="mb-2">
                  <label
                     for="password"
                     className="block text-sm font-semibold text-gray-800"
                  >
                     Password
                  </label>
                  <input
                     name="password"
                     value={password}
                     type="password"
                     onChange={e => setpassword(e.target.value)}
                     className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
               </div>
               <a
                  href="#"
                  className="text-xs text-purple-600 hover:underline"
               ></a>
               <div className="mt-6">
                  <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                     Log in
                  </button>
               </div>
            </form>

            <p className="mt-8 text-xs font-light text-center text-gray-700">
               {" "}
               Don't have an account?{" "}
               <a
                  href="#"
                  className="font-medium text-purple-600 hover:underline"
               >
                  Sign up
               </a>
            </p>
         </div>
      </div>
   );
}
