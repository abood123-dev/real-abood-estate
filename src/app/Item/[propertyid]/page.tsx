"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Style } from '@/app/Listing/page';
import Image from 'next/image';
import { useDispatch, UseDispatch, useSelector } from 'react-redux';
import { addItem } from '@/app/Store/Itemsslice';
import { UseSelector } from 'react-redux';
import { RootState } from '@/app/Store/Store';
import { stat } from 'fs';
export default function UserProfile({params} : any) { 
  const[Data1,setdata1]=useState<Style[] | any>([]);
  const[Data2,setdata2]=useState<Style[] | any>([]);
  const items=useSelector((state:RootState)=>state.cart.items);
  const[Redone,setRed]=useState<boolean>(false);
  useEffect(()=>
    {
      if(items.length>0)
        {
          setRed(true);
        }
    },[items.length])
    const handleScroll=()=>
      {
        const ScrollY=window.scrollY;
        if(ScrollY ===0 || ScrollY > 90)
          {
            setRed(true);
          }
          else
          {
            setRed(false);
          }
      }
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [Redone]);
    
  const dispatch=useDispatch();
  const Addtocart=()=>
    {
      dispatch(addItem(Data2));
      console.log(Redone);
    }
  useEffect(()=>
    {
      if(params.propertyid)
        {
          fetch('https://abood123-dev.github.io/data54/real_estate.json')
          .then((res)=>res.json())
          .then((data)=>
            {
              setdata1(data);
            })
        }
    },[params.propertyid])
    useEffect(() => {
      if (Data1.length > 0 && params.propertyid) {
        const id = Number(params.propertyid);
        const item = Data1.find((property: Style) => property.id === id);
        setdata2(item || null);
      }
    }, [Data1, params.propertyid]);
    console.log(Data2);
    console.log(typeof params.propertyid);
  return (
    <>  
    <Image src='/page-heading-bg.jpg' width={1100} height={450} alt='' className='contimg'/>
    <div className='slash'>HOME / PROPERTY DETAILS</div>
    <div className='contactuss'>PROPERTY DETAILS</div>
    
     {Data2 ? (
      <>
      <div className='data12'>
        <div className='Data2'>
             <div><img className='Data2img' src={Data2.pics}/></div>
             <div className='Data2type'>{Data2.type}</div>
             <div className='Data2row'>
             <div className='Data2desc'>{Data2.description}</div>
             <div><button className='Addvisit' onClick={Addtocart}>Add a visit</button></div>
             </div>
             <div className='Data2bla'>Dolor almesit amet, consectetur adipiscing elit, sed doesn't eiusmod tempor kinfolk tonx seitan crucifix 3 wolf moon bicycle rights keffiyeh snackwave wolf same vice, chillwave vexillologist incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
             <div className='Data2bla'>Dolor almesit amet, consectetur adipiscing elit, sed doesn't eiusmod tempor kinfolk tonx seitan crucifix 3 wolf moon bicycle rights keffiyeh snackwave wolf same vice, chillwave vexillologist incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
             {Redone ? ( <div className='redcircle'>{items.length}</div> ) : null}   
        </div>
        <div className='cont3'>
             <div className='imgw'>
                <div><Image src={'/info-icon-01.png'} width={50} height={50} alt=''/></div> 
                <div>
                    <div className='ad1'>{Data2.area_m2} m2</div> <div style={{color:"grey"}}>Total Flat Space</div>
                </div>
             </div>
             <div className='imgw'>
                <div><Image src={'/info-icon-02.png'} width={50} height={50} alt=''/></div> 
                <div>
                    <div className='ad1'>Contract</div> <div style={{color:"grey"}}>Contract Ready</div>
                </div>
             </div>
             <div className='imgw'>
                 <div><Image src={'/info-icon-03.png'} width={50} height={50} alt=''/></div>
                  <div>
                     <div className='ad1'>Payment</div> <div style={{color:"grey"}}>Payment</div>
                  </div>
             </div>
             <div className='imgw'>
                <div><Image src={'/info-icon-04.png'} width={50} height={50} alt=''/></div>
                 <div>
                     <div className='ad1'>Safety</div> <div style={{color:"grey"}}>24/7 Under</div>
                 </div>
             </div>
      </div>
    
      </div>
      </>
     ) : (
      <>
      <div>Hello</div>
      </>
     )}
    </>
  );
}