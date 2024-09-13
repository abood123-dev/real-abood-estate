"use client";
import React, { useState } from 'react'
import Image from 'next/image';
import '../page.module.css';
function Pagecont() {
   const[input1,setone]=useState<string>('');
   const[input2,settwo]=useState<string>('');
   const[input3,setthree]=useState<string>('');
   const[input4,setfour]=useState<string>('');
   const[Notempty,setnot1]=useState<boolean>(false);
   const[Notempty2,setnot2]=useState<boolean>(false);
   const[Notempty3,setnot3]=useState<boolean>(false);
   const[Notempty4,setnot4]=useState<boolean>(false);
   const[Green,setgreen]=useState<boolean>(false);
   const HandleClick=()=>
     {
          if(input1==="")
               {
                    setnot1(true);
               }
               else
               {
                    setnot1(false)
               }

          if(input2==="")
          {
                setnot2(true);
          }
          else
          {
               setnot2(false)
          }
          if(input3==="")
          {
                    setnot3(true);
          }
          else
          {
               setnot3(false)
          }    
          if(input4==="")
          {
                    setnot4(true);
          } 
          else
          {
               setnot4(false)
          }
          if( input1!=="" && input2!=="" && input3!=="" && input4!=="" )
          {
            setgreen(true);           
          }
     }
  return (
    <>
    <Image src='/page-heading-bg.jpg' width={1100} height={450} alt='' className='contimg'/>
    <div className='slash'>HOME / CONTACT US</div>
    <div className='contactus'>CONTACT US</div>
    <div className='allcont'>
       <div className='con2'>
            <div className='concon'>| Contact us</div>
            <div className='getin'>Get In Touch With Our Agents</div>
            <div className='dolor'>Dolor almesit amet, consectetur adipiscing elit, sed doesn&#39;t eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            <div className='phone'>
                  <div><Image src='/phone-icon.png' width={50} height={50} alt=''/></div>
                  <div><div className='number'>010-020-0340</div> <div className='numinfo'>Phone Number</div> </div>
            </div>
            <div className='phone'>
                  <div><Image src='/email-icon.png' width={50} height={40} alt=''/></div>
                  <div><div className='number'>info@villa.co</div> <div className='numinfo'>Business Email</div></div>
            </div>
       </div>
       <div className='fillform'>
            <div>
                 <div className='label'>Full Name</div>
                 <div><input type='text' placeholder='Your Name...' className='inp' onChange={(e)=>setone(e.target.value)}/></div>
          {Notempty ? (<div style={{color:"red"}}> You should put your Name </div>) : null}
            </div>
            <div>
                 <div className='label'>Email Address</div>
                 <div><input type='text' placeholder='Your Email...' className='inp'  onChange={(e)=>settwo(e.target.value)}/></div>
                 {Notempty2 ? (<div style={{color:"red"}}> You should put your Email </div>) : null}
            </div>
            <div>
                 <div className='label'>Subject</div>
                 <div><input type='text' placeholder='Subject...' className='inp'  onChange={(e)=>setthree(e.target.value)}/></div>
                 {Notempty3 ? (<div style={{color:"red"}}> You should put your Subject </div>) : null}
            </div>
            <div>
                 <div className='label'>Message</div>
                 <div><textarea placeholder='Your Message...' className='inp2'  onChange={(e)=>setfour(e.target.value)}/></div>
                 {Notempty4 ? (<div style={{color:"red"}}> You should put your Message </div>) : null}
            </div>
            {Green ? (<div style={{color:"green"}}> your message has sent I&#39;ll reply as soon as I can </div>): null}
            <div><button className='sendm' onClick={HandleClick}>Send Message</button></div>
            
       </div>
    </div>
    </>
  )
}
export default Pagecont