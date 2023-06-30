/* eslint-disable no-unused-vars */
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ToggleActions = () => {
  let squareRef = useRef();
  // let square2Ref = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      squareRef,
      {
        x: 0,
      },
      {
        x: 1000,
        duration: 8,
        scrollTrigger: {
          trigger: squareRef,
          start: 'top 60%',
          end: 'top 40%',
          toggleActions: 'restart pause resume complete',
          // onEnter onLeave onEnterBack onLeaveBack
          // toggle actions play, restart, reverse, pause, resume, reset, complete, none;
          markers: {
            startColor: 'purple',
            endColor: 'fuchsia',
            fontSize: '1rem',
            indent: 20,
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

export default ToggleActions;

