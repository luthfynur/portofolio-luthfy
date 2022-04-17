import { motion } from 'framer-motion';
import LinkText from '../LinkText';
import Photo from '../Photo';

const Descriptions = ({
  height = '',
  border = '',
  padding = '',
  background = '',
  selected = '',
}) => {
  return (
    <section
      id="descriptions"
      className={`flex flex-row  w-full ${height} ${padding} ${background} ${border} ${
        selected === 'descriptions' ? 'animate-pulse' : ''
      }`}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 w-full justify-items-center">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          transition={{ ease: 'easeOut', duration: 0.6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="order-1 sm:order-2 mt-auto mb-auto"
        >
          <Photo selected={selected} />
        </motion.div>
        <div className="container w-full h-fit order-2 sm:order-1 mt-auto mb-auto">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            transition={{ ease: 'easeOut', duration: 0.6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[8vw] sm:text-[5vw] font-ubuntucondensed mb-2 text-center sm:text-left order-1 sm:order-2"
          >
            Luthfy Nur Wahyudi
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            transition={{ ease: 'easeOut', duration: 0.6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[5vw] sm:text-[2vw] font-ubuntucondensed text-center sm:text-left order-1 sm:order-2"
          >
            Halo! Saya seorang web developer. Saya terbiasa membangun front-end
            website menggunakan
            <LinkText
              href="https://reactjs.org/"
              text="React"
              selected={selected}
            />{' '}
            dengan bantuan framework css
            <LinkText
              href="https://tailwindcss.com/"
              text="Tailwindcss"
              selected={selected}
            />
            . Saya juga pernah menggunakan
            <LinkText
              href="https://mui.com/"
              text="Material-UI"
              selected={selected}
            />{' '}
            dan{' '}
            <LinkText
              href="https://ant.design/"
              text="Ant Design"
              selected={selected}
            />{' '}
            untuk project yang saya kerjakan. Di samping itu, saya juga pernah
            membuat back-end untuk salah satu project saya menggunakan
            <LinkText
              href="https://nodejs.org/en/"
              text="Node.js"
              selected={selected}
            />
            dengan bantuan framework
            <LinkText
              href="https://expressjs.com/"
              text="Expressjs"
              selected={selected}
            />
            .
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Descriptions;
