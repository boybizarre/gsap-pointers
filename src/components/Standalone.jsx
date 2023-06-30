/* eslint-disable no-unused-vars */
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Standalone = () => {
  let boxRef = useRef(null);
  let panelRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // ScrollTrigger.create({
    //     trigger: boxRef,
    //     toggleClass: 'red',
    //     markers: true,
    //     start: 'top 70%',
    //     end: 'top 30%',
    // })

    // ScrollTrigger.create({
    //   trigger: panelRef,
    //   markers: true,
    //   start: 'top 10%',
    //   toggleClass: { targets: 'nav', className: 'nav-active'},
    // })

    ScrollTrigger.create({
      trigger: boxRef,
      markers: true,
      start: 'top 80%',
      end: 'top 30%',
      onUpdate: self => console.log(self),
      // onEnter: () => console.log('enter'),
      // onLeave: () => console.log('leave'),
      // onEnterBack: () => console.log('enter back'),
      // onLeaveBack: () => console.log('leave back'),

    })
  }, []);

  return (
    <>
      {/* <div className='panel'></div>
      <div
        ref={(el) => {
          boxRef = el;
        }}
        className='box'
      ></div>
      <div className='panel'></div> */}

      {/* <nav>
        <ul>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
      </nav>

      <div ref={el => {panelRef = el}} className='panel'>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam id est tempore esse perspiciatis, eligendi, consequatur ut illo sequi pariatur perferendis odit fugiat minus nesciunt, recusandae corrupti et! Esse, voluptatem architecto delectus repudiandae ipsam quaerat. Odit amet obcaecati optio nobis, incidunt in eaque qui facere minus dolorum, laboriosam fugiat doloremque! Atque, recusandae! Porro, dolorem repudiandae. Qui iure expedita cumque voluptatum repudiandae dolores harum atque asperiores possimus necessitatibus nemo natus nisi consequuntur, laudantium maxime ut quia non dolorem? Molestiae provident harum debitis sequi, expedita temporibus nisi voluptas. Voluptas earum necessitatibus numquam dolor minima, maxime excepturi minus dolores quia aliquam perspiciatis vero facilis odio, officia praesentium. Tenetur quasi vero natus magnam iste nihil, debitis maiores rem. Cum, tempora facere blanditiis iure atque aliquam nisi eius, officiis rerum debitis eveniet sequi, doloribus quasi incidunt. Omnis saepe culpa accusantium, fugiat soluta molestias quibusdam rem dolorem expedita deleniti illo, iusto corrupti mollitia? Odio accusamus autem earum a ratione recusandae, explicabo sit ab aperiam deleniti reprehenderit ex laboriosam quam quaerat facilis officiis atque impedit cupiditate similique qui incidunt. Exercitationem voluptatibus repudiandae minima! Dolorum nam mollitia, quos eaque pariatur voluptatum voluptates, ut esse officiis excepturi perferendis odio reiciendis alias debitis et explicabo aliquam, totam tempora. Perferendis alias corrupti distinctio magni temporibus odit, velit dolor voluptatem architecto. Facilis fuga ex modi ad nobis atque expedita quo voluptas sit illum perferendis sed quidem, fugit praesentium placeat a, non laborum veritatis optio itaque repellat rem voluptatum! Ducimus eum, repellat, libero cupiditate labore nobis aliquid possimus ex expedita enim illum at quibusdam. Rerum quasi corporis totam nesciunt iusto corrupti quae, cupiditate ab praesentium maxime aliquam animi labore sint veniam harum placeat, nulla omnis voluptas atque fugiat esse eveniet obcaecati voluptatibus ex? Iusto omnis assumenda sed repellendus doloremque repellat dolorem temporibus eos, quasi voluptatibus? Ratione earum voluptate culpa veritatis placeat possimus vitae voluptas atque alias, aliquid accusantium doloribus dolore voluptatum dolores praesentium voluptates facilis inventore autem sit excepturi nesciunt mollitia. Ea vel aliquid quae excepturi voluptas laudantium odit laboriosam esse! Laudantium, sint. Totam expedita consequatur ducimus, corrupti tempore, possimus inventore saepe labore ea sit dicta eligendi aliquid nobis!</p>
      </div> */}

      <div className='panel'></div>
      <div ref={el => {boxRef = el}} className='box'></div>
      <div className='panel'></div>
    </>
  );
};

export default Standalone;