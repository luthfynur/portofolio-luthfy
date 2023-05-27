import { motion } from "framer-motion";

export default function Logo({
  font = "",
  size = "",
  color = "",
  align = "",
  margin = "",
  selected = "",
  visibility = "",
}) {
  return (
    <motion.h1
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className={`${font} ${size} ${color} ${align} ${margin} ${visibility} ${
        selected === "logo" ? "animate-bounce" : ""
      }`}
    >{`<Luthfy />`}</motion.h1>
  );
}
