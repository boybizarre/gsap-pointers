/* eslint-disable no-unused-vars */
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Pin = () => {
  let squareRef = useRef();
  let square2Ref = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to(
      squareRef,
      // {
      //   // x: 0,
      // },
      {
        // x: 1000,
        duration: 8,
        scrollTrigger: {
          trigger: square2Ref,
          start: 'top 80%',
          end: 'top 30%',
          scrub: 4,
          // toggleActions: 'restart none none none',
          pin: squareRef,
          pinSpacing: true,
          markers: {
            startColor: 'purple',
            endColor: 'fuchsia',
            fontSize: '1rem',
          },
        },
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

export default Pin;
