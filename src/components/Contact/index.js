import { motion } from 'framer-motion';
import ContactCard from '../ContactCard';
import gmailIcon from '../../assets/Images/icons8-gmail.png';
import fbIcon from '../../assets/Images/icons8-facebook.png';
import githubIcon from '../../assets/Images/icons8-github.png';
import waIcon from '../../assets/Images/icons8-whatsapp.png';

export default function Contact({
  height = '',
  border = '',
  padding = '',
  background = '',
  selected = '',
}) {
  return (
    <section
      id="contact"
      className={`flex flex-col  w-full ${height} ${padding} ${background} ${border} ${
        selected === 'contact' ? 'animate-pulse' : ''
      } text-white`}
    >
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        transition={{ ease: 'easeOut', duration: 0.6 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-[8vw] border-b-2 border-white sm:text-[5vw] font-ubuntucondensed mb-4 text-center sm:text-left"
      >
        Kontak
      </motion.h1>
      <ContactCard
        image={gmailIcon}
        text="nurluthfy98@gmail.com"
        link="mailto:nurluthfy98@gmail.com"
        target="_self"
        selected={selected}
      />
      <ContactCard
        image={fbIcon}
        text="Luthfy Nur Wahyudi"
        link="https://www.facebook.com/luthfynw"
        target="_blank"
        selected={selected}
      />
      <ContactCard
        image={githubIcon}
        text="Luthfy Nur"
        link="https://github.com/luthfynur"
        target="_blank"
        selected={selected}
      />
      <ContactCard
        image={waIcon}
        text="6281316869414"
        link="https://api.whatsapp.com/send?phone=6281316869414"
        target="_blank"
        selected={selected}
      />
    </section>
  );
}
