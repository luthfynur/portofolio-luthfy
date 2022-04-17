import { motion } from 'framer-motion';

const LogoText = ({
  font = '',
  size = '',
  color = '',
  align = '',
  margin = '',
  selected = '',
  visibility = '',
}) => {
  return (
    <motion.h1
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className={`${font} ${size} ${color} ${align} ${margin} ${visibility} ${
        selected === 'logotext' ? 'animate-bounce' : ''
      }`}
    >{`<Luthfy />`}</motion.h1>
  );
};

export default LogoText;
