import React, { useState } from 'react';
import Axios from 'axios'
import { Link } from 'react-router-dom';
export default function Signup(props) {
    const [name,setname]=useState('');
    const [email,setemail]=useState('');
    const [password,setpassword]=useState('');
    
    async function registeruser (event){
        event.preventDefault();
        const response=await fetch('http://localhost:3001/api/register',{
            method:"POST",
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                name,
                email,
                password,


            })
        })

        if(response){
            window.location.href="/login"
        }
        else{
            alert("user already exists try with other password")
        }
    }
    // const registeruser = () => {
    //     Axios({
    //       method: "POST",
    //       data: {
    //         name: name,
    //         email:email,
    //         password: password,
    //       },
    //       withCredentials: true,
    //       url: "http://localhost:3001/api/register",
    //     }).then((res) => console.log(res));
    //   };
    // async function registeruser (event){
    //     event.preventDefault();
    //     const response=await fetch('http://localhost:3001/api/register',{
    //         method:"POST",
    //         headers:{
    //             'Content-Type':'application/json',
    //         },
    //         body:JSON.stringify({
    //             name,
    //             email,
    //             password,


    //         })
    //     })
    //     const data=await response.json();
    //     if(data.success){
    //         window.location.href='/login'
    //     }
    //     else{
    //         alert('not valid')
        
    //     }
    // }

    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40  ring-2 ring-purple-600 lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700 ">
                   Sign Up
                </h1>
                <form onSubmit={registeruser} className="mt-6">
               
                    <div className="mb-2">
                        <label
                            for="lname"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Name
                        </label>
                        <input  name="lname" value={name}
                            type="text"
                            onChange={(e)=>setname(e.target.value)}
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input  name="email" value={email}
                            type="email" onChange={(e)=>setemail(e.target.value)}
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
                        <input  name="password" value={password}
                            type="password" onChange={(e)=>setpassword(e.target.value)}
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <a
                        href="#"
                        className="text-xs text-purple-600 hover:underline"
                    >
                       
                    </a>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Register
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Already have an account?{" "}
                    <Link
                        to={"/login"}
                        className="font-medium text-purple-600 hover:underline"
                    >
                        Sign in
                    </Link>
                </p>
            </div>
            
        </div>
    );
}