"use client";
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector, UseSelector } from 'react-redux';
import '../globals.scss';
import { RootState } from '../Store/Store';
import { Style } from '../Listing/page';
import Image from 'next/image';
import { UseDispatch } from 'react-redux';
import { removeItem } from '../Store/Itemsslice';
function Visits() {
  const items=useSelector((state:RootState)=>state.cart.items);
  const[IsEmpty,setempty]=useState<boolean>(false);
  const dispatch=useDispatch();
  useEffect(()=>
    {
      if(items.length===0)
        {
           setempty(true);
        }
        else
        {
            setempty(false);
        }

    },[items])
  return (
    <>
    <Image src='/page-heading-bg.jpg' width={1100} height={450} alt='' className='contimg'/>
    <div className='slash'>HOME / YOUR VISITS</div>
    <div className='contactusss'>Your Visits</div>
    {IsEmpty ? (<div className='empty'>You havent scheduled a visit yet !</div>) : null}
      {items.map((item:Style)=>
        {
        return(
            
        <div className='visitt' key={item.id}>
         <div><Image src={item.pics} className='visitpic' alt=''/></div>
         <div className='descwithprice'>
         <div className='visitdesc'>{item.description}</div>
         <div className='visitprice'>{item.price}</div> 
         </div>
         <div> <button className='cancel' onClick={()=>dispatch(removeItem(item))}>Cancel the visit</button></div>
        </div>
        
      )})}   
     </>       
  )
}

export default Visits
