import Card from '../Card';
import { motion } from 'framer-motion';

export default function ProjectCard({
  image,
  imageAlt,
  projectName,
  linkSource,
  linkProject,
  selected,
  disableLinkProject,
  disableSourceCode,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      transition={{ ease: 'easeOut', duration: 0.6 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={`order-1 sm:order-2 mt-auto mb-auto ${
        selected === 'project-card' ? 'animate-bounce' : ''
      }`}
    >
      <Card
        id="project-card"
        width="w-[85vw] sm:w-full"
        height="h-fit"
        padding="p-0"
        background="bg-white"
        image={image}
        imageAlt={imageAlt}
        projectName={projectName}
        linkSourceProject={linkSource}
        linkProject={linkProject}
        selected={selected}
        disableLinkProject={disableLinkProject}
        disableSourceCode={disableSourceCode}
      />
    </motion.div>
  );
}
