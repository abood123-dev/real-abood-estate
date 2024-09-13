"use client";
import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import './page.module.css';
import Link from "next/link";
import { Provider, useSelector } from "react-redux";
import store, { RootState } from "./Store/Store";
import { UseSelector } from "react-redux";
import { stat } from "fs";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });
interface Rootlayoutprops
{
  children:React.ReactNode,
}
export default function RootLayout({
  children,
}: Rootlayoutprops) {
  const [Isvisible,setIsvisible]=useState(true);
  const[Color1,setcolor1]=useState<boolean>(true);
  const[Color2,setcolor2]=useState<boolean>(false);
  const[Color3,setcolor3]=useState<boolean>(false);
  const[Color4,setcolor4]=useState<boolean>(false);
 const HandleColor1=()=>
  {
    setcolor1(true);
    setcolor2(false);
    setcolor3(false);
    setcolor4(false);
  }
  const HandleColor2 =()=>
    { 
      setcolor2(true);
      setcolor1(false)
      setcolor3(false);
      setcolor4(false);
    }
    const HandleColor3=()=>
      {
        setcolor2(false);
        setcolor3(true);
        setcolor4(false);
        setcolor1(false);
      }
      const HandleColor4=()=>
        {
          setcolor2(false);
          setcolor3(false);
          setcolor4(true);
          setcolor1(false);
        }
  const handleScroll=()=>
    {
      const ScrollY=window.scrollY;
      if(ScrollY ===0 || ScrollY > 90)
        {
          setIsvisible(true);
        }
        else
        {
          setIsvisible(false);
        }
    }
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [Isvisible]);
const Header :React.CSSProperties = 
{
 display:"flex",
 flexDirection:"row",
 justifyContent:"center",
 alignItems:"center",
 alignContent:"center",
gap: '300',
paddingTop: '20',
backgroundColor: '#f5f5f5',
top: '0',
paddingBottom:"20",
opacity: Isvisible ? 1 : 0,
transition: "ease-out 0.3s",
position:"fixed",
zIndex:'100',
width:"100%"
}
  return (
    <html lang="en">
       <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className={inter.className}>
      <Provider store={store}>
     <div className={styles.Header} style={Header}>
      <div className="villa">Villa</div>  
      <div className="secondop">
      <Link href='/' style={{textDecoration:'none',color: Color1 ? 'coral' : 'black' }}>  <div onClick={HandleColor1} >Home</div> </Link> <Link href='/Listing' style={{textDecoration:'none',color: Color2  ? 'coral' : 'black' }}><div onClick={HandleColor2}>Properties</div></Link> <Link href='/Visits' style={{textDecoration:'none',color:Color3 ? 'coral' : 'black' }}>  <div onClick={HandleColor3}>Your visits</div> </Link> <Link href='/Contact' style={{textDecoration:'none',color:Color4 ? 'coral' : 'black' }}><div onClick={HandleColor4}>Contact us</div></Link> <Link href='/Listing' style={{textDecoration:'none',color:"black"}}>  <div className="calender" onClick={HandleColor2}><Image src='https://th.bing.com/th/id/OIP.04r7fFOqv3ONvvJZfokfMwAAAA?rs=1&pid=ImgDetMain' alt="" width="25" height="25" className="whitecal"  /> </div> <div className="your" onClick={HandleColor2}>Schedule a visit</div> </Link>  
      </div>
      </div>  
      {children}
        </Provider>
        </body>
    </html>
  );
}

