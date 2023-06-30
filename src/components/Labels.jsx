/* eslint-disable no-unused-vars */
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Labels = () => {
  let squareRef = useRef();
  // let square2Ref = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(squareRef, { x: 500, duration: 5 })
      .to(squareRef, { y: 500, duration: 5 })
      // .addLabel('rotate')
      .to(squareRef, { rotate: 90, repeat: 5, ease: 'elastic' });

    tl.addLabel('rotate', 6)
    tl.play('rotate');
    // ScrollTrigger.create({
    //   markers: true,
    //   animation: tl,
    //   trigger: squareRef,
    //   start: 'top center',
    // })
  }, []);

  return (
    <>
      <div className='fullscreen'></div>
      <div
        ref={(el) => {
          squareRef = el;
        }}
        className='box'
      ></div>
      <div className='fullscreen'></div>
    </>
  );
};

export default Labels;
