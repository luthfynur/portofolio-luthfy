import { motion } from 'framer-motion';
import ProjectCard from '../ProjectCard';
import SSSpaceTourism from '../../assets/Images/space-tourism.png';
import SSTipCalculator from '../../assets/Images/tip-calculator.png';
import SSAdviceGenerator from '../../assets/Images/advice-generator.png';
import SSEVoting from '../../assets/Images/e-voting.png';
import SSCommentsSection from '../../assets/Images/comments-section.png';
import SSPortofolio from '../../assets/Images/portofolio.png';
import SSBakhum from '../../assets/Images/bakhum.png';

const Project = ({
  height = '',
  border = '',
  padding = '',
  background = '',
  selected = '',
}) => {
  return (
    <section
      id="project"
      className={`flex flex-col  w-full ${height} ${padding} ${background} ${border} ${
        selected === 'project' ? 'animate-pulse' : ''
      }`}
    >
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        transition={{ ease: 'easeOut', duration: 0.6 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-[8vw] border-b-2 border-black sm:text-[5vw] font-ubuntucondensed mb-4 text-center sm:text-left"
      >
        Project 
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        transition={{ ease: 'easeOut', duration: 0.6 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-[5vw] sm:text-[2vw] font-ubuntucondensed mb-4 text-center sm:text-left"
      >
        Berikut beberapa project frontend yang saya kerjakan:
      </motion.h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full justify-items-center gap-5 lg:gap-10">
        <ProjectCard
          image={SSSpaceTourism}
          imageAlt="space tourism"
          projectName="Space Tourism Website"
          linkSource="https://github.com/luthfynur/space-tourism-website"
          linkProject="http://space-tourism-website-beige.vercel.app/"
          selected={selected}
        />
        <ProjectCard
          image={SSCommentsSection}
          imageAlt="comments section"
          projectName="Comments App (Full Stack)"
          linkSource="https://github.com/luthfynur/comments-section-app"
          linkProject="https://comments-silk.vercel.app/"
          selected={selected}
        />
        <ProjectCard
          image={SSEVoting}
          imageAlt="e-voting"
          projectName="E-Voting PTIK (Full Stack)"
          linkSource="https://github.com/luthfynur/e-voting-ptik-frontend-react"
          linkProject="#"
          disableLinkProject={true}
          selected={selected}
        />
        <ProjectCard
          image={SSBakhum}
          imageAlt="bakhum"
          projectName="Prototype Web BAKHUM UNJ"
          linkSource="#"
          linkProject="#"
          disableLinkProject={true}
          disableSourceCode={true}
          selected={selected}
        />
        <ProjectCard
          image={SSTipCalculator}
          imageAlt="tip calculator"
          projectName="Tip Calculator App"
          linkSource="https://github.com/luthfynur/tip-calculator-app"
          linkProject="https://tip-calculator-app-ruddy.vercel.app/"
          selected={selected}
        />
        <ProjectCard
          image={SSAdviceGenerator}
          imageAlt="advice generator"
          projectName="Advice Generator"
          linkSource="https://github.com/luthfynur/advice-generator"
          linkProject="https://advice-generator-two-psi.vercel.app/"
          selected={selected}
        />
        <ProjectCard
          image={SSPortofolio}
          imageAlt="portofolio"
          projectName="Portofolio"
          linkSource="https://github.com/luthfynur/portofolio-luthfy"
          linkProject="#"
          disableLinkProject={true}
          selected={selected}
        />
      </div>
    </section>
  );
};

export default Project;
