import Table from '../Table';
import { motion } from 'framer-motion';

const skillData = [
  {
    name: 'HTML',
    value: 'Competent',
  },
  {
    name: 'CSS',
    value: 'Competent',
  },
  {
    name: 'JavaScript',
    value: 'Competent',
  },
  {
    name: 'TypeScript',
    value: 'Competent',
  },
  {
    name: 'Dart',
    value: 'Beginner'
  },
  {
    name: 'SQL',
    value: 'Beginner',
  },
  {
    name: 'ReactJS',
    value: 'Competent',
  },
  {
    name: 'VueJS',
    value: 'Competent',
  },
  {
    name: 'NodeJS',
    value: 'Competent',
  },
  {
    name: 'ExpressJS',
    value: 'Competent',
  },
  {
    name: 'NestJS',
    value: 'Beginner',
  },
  {
    name: "Flutter",
    value: "Beginner"
  },
  {
    name: 'MySQL',
    value: 'Beginner',
  },
  {
    name: 'MongoDB',
    value: 'Competent',
  },
  {
    name: 'Git',
    value: 'Competent',
  },
];


export default function Skill({
  height = '',
  border = '',
  padding = '',
  background = '',
  selected = '',
}) {
  return (
    <section
      id="skill"
      className={`flex flex-col  w-full ${height} ${padding} ${background} ${border} ${
        selected === 'skill' ? 'animate-pulse' : ''
      }`}
    >
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        transition={{ ease: 'easeOut', duration: 0.6 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-[8vw] text-white border-b-2 border-white sm:text-[5vw] font-ubuntucondensed mb-4 text-center sm:text-left"
      >
        Skill
      </motion.h1>
      <Table selected={selected} data={skillData} headerName="Skill" headerValue="Level" />
    </section>
  );
}
