import React from 'react'
import Querycontext from "../context/querycontext";
import { useContext } from 'react';

export default function Popularitem(props) {
    const{
        mode,
      }=useContext(Querycontext)
    async function savetowishlist (val){
        const response=await fetch('http://localhost:3001/api/wishlist',{
              method:"POST",
              headers:{ 
                  'Content-Type':'application/json',
              },
              body:JSON.stringify({
                name:localStorage.getItem('name'),
                  title:val.title,
                  img:val.urlToImage,
                  source:val.author,
                  description:val.description,
                  link:val.url,
  
              })
          })
          console.log("post call made");
      }
  return (
     
    <div className=' relative my-5 flex flex-row h-[200px] w-[400px] justify-center text-center content-center   rounded-md p-10  shadow-xl shadow-gray-900-500/50'>
       <button onClick={()=>{savetowishlist(props.data)}} className={` opacity-60 hover:opacity-100 absolute text-base left-0 top-1  m-2 bg-${mode==='black'?'white':'black'} text-${mode} font-bold py-2 px-4 rounded-full`}>Read later
</button>
        <img className='max-w-[100px] max-h-[100px] rounded-md self-center '  src={(props.data.urlToImage)?props.data.urlToImage:'https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png'}alt=""  />
        
        <div className={`  text-center flex flex-col items-start my-5 p-5 h-[100px]  w-[350px] justify-center content-center text-${mode==='white'?'black':'white'} `}>
       
        <a href={props.data.url} target="_blank"><h2 className='font-bold text-sm break-normal '>{props.data.title}</h2></a>
        {/* <h3 className='font-bold text-sm break-normal'>Source : {props.data.author}</h3> */}
        {/* <p className=''>{props.data.description}</p> */}
        </div>
    </div>
  )
}
