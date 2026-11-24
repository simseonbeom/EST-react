import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import { useEffect, useRef } from 'react';
import S from './Home.module.css'

function Home() {

  const textRef = useRef<HTMLDivElement>(null);
 
  // useEffect(()=>{
  //   gsap.fromTo(textRef.current!.children,{
  //     x:50,
  //     opacity:0,
  //   },{
  //     x:0,
  //     opacity:1,
  //     stagger:0.5,
  //   })
  // })

  useGSAP(() => {
    gsap.fromTo('h2, span',{
      x:50,
      opacity:0,
    },{
      x:0,
      opacity:1,
      stagger:0.5,
    })
  }, { scope: textRef });

  return (
    <div className={S.container}>
      <div ref={textRef}>
        <h2><strong>2.9cm</strong> is</h2>
        <span>everything</span>
      </div>
      {/* <video src="/visual.mp4" autoPlay muted loop playsInline></video> */}
      <img src="https://framerusercontent.com/images/eYpumyvsevESVUTnmdpBW2CxeHc.jpg" alt="" />
    </div>
  )
}
export default Home