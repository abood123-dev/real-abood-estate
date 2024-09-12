"use client";
import React, { useState } from 'react';
import './globals.scss';
import Image from 'next/image';
function Page2() {
    const [visible1,setv1]=useState(false);
    const [visible2,setv2]=useState(false);
    const [visible3,setv3]=useState(false);
  return (
    <div className='contfe'>
      <div className='respon2'>
       <Image src={'/featured.jpg'} width={270} height={400} alt=''/>
      </div>
      <div className='contfe2'>
        <div className='fe'>|Featured</div>
        <div className='besta'>Best Appartment & Sea view</div>
        <div className='usecont'>
        <div className='use' onClick={()=>setv1(!visible1)}>Best useful links?</div>
       { visible1 ? ( <div className='use2'>Dolor almesit amet, consectetur adipiscing elit, sed doesnt&#39;eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>) : null}
        <div className='use' onClick={()=>setv2(!visible2)}>How does this work?</div>
      {visible2 ?  <div className='use2'>Dolor almesit amet, consectetur adipiscing elit, sed doesn&#39;t eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div> : null}
        <div className='use' onClick={()=>setv3(!visible3)}>Why is villa agency the best?</div>
      {visible3 ? ( <div className='use2'>Dolor almesit amet, consectetur adipiscing elit, sed doesn&#39;t eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>) : null}
      </div>
      </div>
      <div className='cont3'>
             <div className='imgw'>
                <div><Image src={'/info-icon-01.png'} width={50} height={50} alt=''/></div> 
                <div>
                    <div className='ad1'>250 m2</div> <div style={{color:"grey"}}>Total Flat Space</div>
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
  )
}

export default Page2
