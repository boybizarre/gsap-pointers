/* eslint-disable no-unused-vars */
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Text = () => {
  let span1 = useRef(null);
  let span2 = useRef(null);
  let span3 = useRef(null);

  useEffect(() => {
    const spanArray = [span1, span2, span3];

    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(spanArray).forEach((span) => {
      ScrollTrigger.create({
        trigger: span,
        markers: true,
        start: 'top 30%',
        // toggleClass: 'active',
        onEnter: () => {
          span.classList.add('span-active');
        }
      });
    });
  }, []);

  return (
    <>
      <main>
        <h1> THIS IS THE HEADER</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque ipsa
          autem fugiat assumenda architecto maiores animi earum sit aut iste
          incidunt dolorem aperiam hic, voluptatibus distinctio mollitia et
          labore quod temporibus, doloremque laudantium dolores? Atque nobis
          inventore ex rerum earum aliquam aliquid cumque similique at eaque
          voluptates eius, quaerat eum{' '}
          <span
            ref={(el) => {
              span1 = el;
            }}
          >
            {' '}
            odit voluptas officiis ea beatae numquam rem maxime tempore nesciunt
            quos accusantium possimus? Dolor nihil sequi, repellendus neque odit
            iure facere, quisquam numquam nisi perspiciatis dolorem incidunt
            iste alias{' '}
          </span>{' '}
          sed ipsum saepe dicta. Excepturi qui tenetur nobis veritatis debitis
          dolorem, ea voluptates fugiat perspiciatis iste facilis, nemo
          voluptatum! Asperiores, molestias.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque ipsa
          autem fugiat assumenda architecto maiores animi earum sit aut iste
          incidunt dolorem aperiam hic, voluptatibus distinctio mollitia et
          labore quod temporibus, doloremque laudantium dolores? Atque nobis
          inventore ex rerum earum aliquam aliquid cumque similique at eaque
          voluptates eius, quaerat eum odit voluptas officiis ea beatae numquam
          rem maxime tempore nesciunt quos accusantium possimus? Dolor nihil
          sequi, repellendus neque odit iure facere, quisquam numquam nisi
          perspiciatis dolorem incidunt iste alias sed ipsum saepe dicta.
          Excepturi qui tenetur nobis veritatis debitis dolorem, ea voluptates
          fugiat perspiciatis iste facilis, nemo voluptatum! Asperiores,
          molestias.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque ipsa
          autem fugiat assumenda architecto maiores animi earum sit aut iste
          incidunt dolorem aperiam hic, voluptatibus distinctio mollitia et
          labore quod temporibus, doloremque laudantium dolores? Atque nobis
          inventore ex rerum{' '}
          <span
            ref={(el) => {
              span2 = el;
            }}
          >
            {' '}
            earum aliquam aliquid cumque similique at eaque voluptates eius,
            quaerat eum odit voluptas officiis ea beatae numquam rem maxime
            tempore nesciunt{' '}
          </span>{' '}
          quos accusantium possimus? Dolor nihil sequi, repellendus neque odit
          iure facere, quisquam numquam nisi perspiciatis dolorem incidunt iste
          alias sed ipsum saepe dicta. Excepturi qui tenetur nobis veritatis
          debitis dolorem, ea voluptates fugiat perspiciatis iste facilis, nemo
          voluptatum! Asperiores, molestias.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque ipsa
          autem fugiat assumenda architecto maiores animi earum sit aut iste
          incidunt dolorem aperiam hic, voluptatibus distinctio mollitia et
          labore quod temporibus, doloremque laudantium dolores? Atque nobis
          inventore ex rerum earum aliquam aliquid cumque similique at eaque
          voluptates eius, quaerat eum odit voluptas officiis ea beatae numquam
          rem maxime tempore nesciunt quos accusantium possimus? Dolor nihil
          sequi, repellendus neque odit iure facere, quisquam numquam nisi
          perspiciatis dolorem incidunt iste alias sed ipsum saepe dicta.
          Excepturi qui tenetur nobis veritatis debitis dolorem, ea voluptates
          fugiat perspiciatis iste facilis, nemo voluptatum! Asperiores,
          molestias.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque ipsa
          autem fugiat assumenda architecto maiores animi earum sit aut iste
          incidunt dolorem aperiam hic, voluptatibus distinctio mollitia et
          labore quod temporibus, doloremque laudantium dolores? Atque nobis
          inventore ex rerum earum{' '}
          <span
            ref={(el) => {
              span3 = el;
            }}
          >
            {' '}
            aliquam aliquid cumque similique at eaque voluptates eius, quaerat
            eum odit voluptas officiis ea beatae numquam rem maxime tempore
            nesciunt quos accusantium possimus? Dolor nihil sequi, repellendus
            neque odit
          </span>{' '}
          iure facere, quisquam numquam nisi perspiciatis dolorem incidunt iste
          alias sed ipsum saepe dicta. Excepturi qui tenetur nobis veritatis
          debitis dolorem, ea voluptates fugiat perspiciatis iste facilis, nemo
          voluptatum! Asperiores, molestias.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque ipsa
          autem fugiat assumenda architecto maiores animi earum sit aut iste
          incidunt dolorem aperiam hic, voluptatibus distinctio mollitia et
          labore quod temporibus, doloremque laudantium dolores? Atque nobis
          inventore ex rerum earum aliquam aliquid cumque similique at eaque
          voluptates eius, quaerat eum odit voluptas officiis ea beatae numquam
          rem maxime tempore nesciunt quos accusantium possimus? Dolor nihil
          sequi, repellendus neque odit iure facere, quisquam numquam nisi
          perspiciatis dolorem incidunt iste alias sed ipsum saepe dicta.
          Excepturi qui tenetur nobis veritatis debitis dolorem, ea voluptates
          fugiat perspiciatis iste facilis, nemo voluptatum! Asperiores,
          molestias.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque ipsa
          autem fugiat assumenda architecto maiores animi earum sit aut iste
          incidunt dolorem aperiam hic, voluptatibus distinctio mollitia et
          labore quod temporibus, doloremque laudantium dolores? Atque nobis
          inventore ex rerum earum aliquam aliquid cumque similique at eaque
          voluptates eius, quaerat eum odit voluptas officiis ea beatae numquam
          rem maxime tempore nesciunt quos accusantium possimus? Dolor nihil
          sequi, repellendus neque odit iure facere, quisquam numquam nisi
          perspiciatis dolorem incidunt iste alias sed ipsum saepe dicta.
          Excepturi qui tenetur nobis veritatis debitis dolorem, ea voluptates
          fugiat perspiciatis iste facilis, nemo voluptatum! Asperiores,
          molestias.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque ipsa
          autem fugiat assumenda architecto maiores animi earum sit aut iste
          incidunt dolorem aperiam hic, voluptatibus distinctio mollitia et
          labore quod temporibus, doloremque laudantium dolores? Atque nobis
          inventore ex rerum earum aliquam aliquid cumque similique at eaque
          voluptates eius, quaerat eum odit voluptas officiis ea beatae numquam
          rem maxime tempore nesciunt quos accusantium possimus? Dolor nihil
          sequi, repellendus neque odit iure facere, quisquam numquam nisi
          perspiciatis dolorem incidunt iste alias sed ipsum saepe dicta.
          Excepturi qui tenetur nobis veritatis debitis dolorem, ea voluptates
          fugiat perspiciatis iste facilis, nemo voluptatum! Asperiores,
          molestias.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque ipsa
          autem fugiat assumenda architecto maiores animi earum sit aut iste
          incidunt dolorem aperiam hic, voluptatibus distinctio mollitia et
          labore quod temporibus, doloremque laudantium dolores? Atque nobis
          inventore ex rerum earum aliquam aliquid cumque similique at eaque
          voluptates eius, quaerat eum odit voluptas officiis ea beatae numquam
          rem maxime tempore nesciunt quos accusantium possimus? Dolor nihil
          sequi, repellendus neque odit iure facere, quisquam numquam nisi
          perspiciatis dolorem incidunt iste alias sed ipsum saepe dicta.
          Excepturi qui tenetur nobis veritatis debitis dolorem, ea voluptates
          fugiat perspiciatis iste facilis, nemo voluptatum! Asperiores,
          molestias.
        </p>
      </main>
    </>
  );
};

export default Text;
