import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import Querycontext from '../context/querycontext'
import Wishitem from './Wishitem';

export default function Wishlist() {
  const{
    wish,
    setwish,
    mode,
    getwishlist
  }=useContext(Querycontext);

  useEffect(() => {
 getwishlist();
  }, [])
  
  return (
    <div className={` m-3 `}>
<div className={` grid grid-cols-3 gap-4 `}>
{wish.map(item=>{
  return <Wishitem item={item} key={item.title}/>
})}
</div></div>

  )
}
