import Table from '../Table';
import { motion } from 'framer-motion';

const data = [
  {
    name: 'Agustus 2022',
    value: 'Lulus pendidikan S1 Program Studi Pendidikan Teknik Informatika dan Komputer Universitas Negeri Jakarta',
  },
  {
    name: "Juli 2022 - Juni 2023",
    value: `Programmer di PT Qtera Mandiri. Keahlian: Pengembangan aplikasi web dengan Nodejs, Express Js, MongoDB, Mongoose ODM, Vue js. Pengembangan aplikasi mobile android dengan Flutter. Bahasa pemrograman yang digunakan: Javascript, Typescript dan Dart `
  },
  {
    name: "Juli 2023 - Juni 2024",
    value: `Fullstack Developer di PT Magna Solusi Indonesia. Keahlian: Fixing, enhancement, maintenance, deployment aplikasi dengan: Java, MySQL, Postgresql, MSSQL, VB.NET, Springboot`
  },
];

const Timeline = ({
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
        selected === 'timeline' ? 'animate-pulse' : ''
      }`}
    >
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        transition={{ ease: 'easeOut', duration: 0.6 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-[8vw] text-white border-b-2 border-white sm:text-[5vw] font-ubuntucondensed mb-4 text-center sm:text-left"
      >
        Pengalaman
      </motion.h1>
      <Table selected={selected} data={data} headerName="Waktu" headerValue="Keterangan" />
    </section>);
  }

export default Timeline