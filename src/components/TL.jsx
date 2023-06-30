/* eslint-disable no-unused-vars */
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const TimeLine = () => {
  let boxRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // gsap.to(boxRef, {
    //   x: 500,
    //   duration: 2,
    // });
    // gsap.to(boxRef, {
    //   y: 200,
    //   duration: 3,
    //   delay: 2,
    // });
    // gsap.to(boxRef, {
    //   x: 0,
    //   duration: 2,
    //   delay: 5,
    // });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: boxRef,
        markers: true,
        start: 'top 80%',
        end: 'top 30%',
        scrub: 1,
      }
    });
    
    tl.to(boxRef, { x: 500, duration: 2 })
      .to(boxRef, { y: 200, duration: 3 })
      .to(boxRef, { x: 0, duration: 2 });
  }, []);

  return (
    <>
      <div className='panel'></div>
      <div
        ref={(el) => {
          boxRef = el;
        }}
        className='box'
      ></div>
      <div className='panel'></div>
    </>
  );
};

export default TimeLine;
