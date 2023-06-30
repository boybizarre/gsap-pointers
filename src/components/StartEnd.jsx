/* eslint-disable no-unused-vars */
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const StartEnd = () => {
  let squareRef = useRef();
  // let square2Ref = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      squareRef,
      {
        // x: 0,
      },
      {
        // x: 700,
        duration: 3,
        scrollTrigger: {
          trigger: squareRef,
          start: 'top 30%',
          end: () => {
            `+=${squareRef.offsetHeight}`;
          },
          markers: true,
          // markers: {
          //   startColor: 'purple',
          //   endColor: 'blue',
          //   fontSize: '2rem',
          //   indent: 100
          // },
          toggleClass: 'red',
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
        {/* <div
          ref={(el) => {
            square2Ref = el;
          }}
          className='square-2'
        ></div> */}
      </div>
    </>
  );
};

export default StartEnd;
