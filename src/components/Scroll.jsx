/* eslint-disable no-unused-vars */
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Scroll = () => {
  let squareRef = useRef();
  let square2Ref = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      squareRef,
      {
        x: 0,
      },
      {
        x: 700,
        duration: 3,
        scrollTrigger: square2Ref,
      }
    );
  }, []);

  return (
    <>
      <div className='div-1'></div>
      <div className='div-2'>
        <div
          ref={(el) => {
            squareRef = el;
          }}
          className='square'
        ></div>
        <div
          ref={(el) => {
            square2Ref = el;
          }}
          className='square-2'
        ></div>
      </div>
    </>
  );
};

export default Scroll;
