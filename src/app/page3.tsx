import Image from 'next/image'
import React from 'react';
import './page.module.css';
function Page3() {
  return (
    <>
    <div className='pg3'>
      <Image src={'/video-bg.jpg'} width={1400} height={600} alt='' className='respon3'/>
      <div className='vv'>|video view</div>
      <div className='get'>Get Closer View & Different Feeling</div>
      <Image src={'/video-frame.jpg'} width={1000} height={420} alt='' className='frame'/>
     <a href='https://youtube.com'> <Image src={'https://th.bing.com/th/id/OIP.gtj9idWNJK2FXqKJOODhJQHaHa?rs=1&pid=ImgDetMain'} alt='' className='playicon'/></a>
    </div>
    <div className='threestar'>
        <div className='onestar'>
               <div className='num'>34</div> 
               <div className='build'>
                    <div>Buildings</div> <div>Finised now</div>
               </div>
        </div>
        <div className='onestar'>
               <div className='num'>12</div>
                <div className='build'>
                     <div>Years</div> <div>Experience</div>
                </div>
        </div>
        <div className='onestar'>
               <div className='num'>24</div> 
               <div className='build'>
                    <div>Awwards</div> <div>Won 2023</div>  
              </div> 
        </div>
    </div>
    </>
  )
}

export default Page3
