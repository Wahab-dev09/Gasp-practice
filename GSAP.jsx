import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './GSAP.css';

gsap.registerPlugin(ScrollTrigger);

const GSAP = () => {
  const imgRef = useRef(null);
  const imgRef2 = useRef(null);

  useEffect(() => {
    gsap.to(imgRef.current, {
      x: '-20%',                  // Move 20% to the left
      y: '150%',                  // Move 150% down
      duration: 1,
      scrollTrigger: {
        trigger: imgRef2.current,         // Triggered by .page2 entering the viewport
        start: 'top 80%',          // Start animation when top of .page2 is at 80% of viewport height
        end: 'top 10%',            // End animation when top of .page2 is at 10% of viewport height
        scrub: 2,                  // Slower scroll-tied animation, but not too slow
        markers: true,             // Visual markers for debugging
      },
    });
  }, []);

  return (
    <div className='main'>
      <div className="page1"><p>FANTA</p><img ref={imgRef} src="/fanta.png" alt="" /></div>
      <div ref={imgRef2} className="page2"><p>Refresh your day</p></div>
      <div className="page3"></div>
    </div>
  )
}

export default GSAP
