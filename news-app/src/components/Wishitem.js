import React, { useContext } from 'react'
import Querycontext from '../context/querycontext'


export default function Wishitem(props) {
  const{
    mode,
    deletefromwishlist
  }=useContext(Querycontext)
    // async function deletefromwishlist (val){
    //     const k=await fetch('http://localhost:3001/api/wishlist/delete',{
    //           method:"POST",
    //           headers:{ 
    //               'Content-Type':'application/json',
    //           },
    //           body:JSON.stringify({
    //               title:val,
             
  
    //           })
    //       })
    //       console.log({k});
    //   }
  return (
    <div className={`relative  flex flex-col max-h-[500px] max-w-[430px] justify-center text-center content-center   rounded-md p-10  bg-${mode==='black'?'black':'white'}  shadow-xl shadow-gray-900-500/50`}>
    <div>
    
        <img className='relative max-w-[350px] max-h-[300px] rounded-md self-center  '  src={(props.item.image)?props.item.image:'https://www.shutterstock.com/image-vector/black-linear-photo-camera-logo-260nw-622639151.jpg'}alt="not found"  />
        <button onClick={()=>{deletefromwishlist(props.item.title)}} className={`  opacity-60 hover:opacity-100 absolute  left-9 top-0 m-2 bg-${mode==='black'?'white':'black'} text-${mode} font-bold py-2 px-4 rounded-full`}>Remove</button>
        </div> 
        <div className={`  text-center flex flex-col items-start my-10 p-5 h-[100px]  w-[350px] justify-center content-center text-${mode==='white'?'black':'white'} `}>
       
        <a href={props.item.link} target="_blank"><h2 className='font-bold text-lg break-normal '>{props.item.title}</h2></a>
        {/* <h3 className='font-sm text-base break-normal text-gray-500'>Published at : {props.item.publishedAt}</h3> */}
        {/* <p className=''>{props.item.description}</p> */}
        </div>
    
    </div>
  )
}
