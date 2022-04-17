import useImage from '../../hooks/useImage';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Modal = ({ selected = '', imageName, updater }) => {
  const { image } = useImage(imageName);
  const modal = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (selected === imageName || selected === 'modal') {
      setScale(1);
      modal.current.classList.remove('hidden');
    }
  }, [updater, imageName, selected]);
  return (
    <div
      ref={modal}
      id="modal"
      className={`hidden bg-black/25 right-0 left-0 mx-auto w-full top-0 bottom-0 my-auto h-screen fixed z-50 p-[20px]`}
    >
      <motion.div
        initial={{ scale: 0 }}
        transition={{ duration: 0.5 }}
        whileInView={{ scale: scale }}
        className="flex flex-col w-full h-full justify-center"
      >
        {imageName !== null ? (
          <img
            className="h-[30vh] sm:h-[400px] mx-auto object-contain"
            src={image}
            alt={imageName}
          />
        ) : (
          <div className="flex flex-col items-center bg-white w-[70vw] h-[40vh] sm:w-[400px] sm:h-[400px] mx-auto">
            <h1 className="font-ubuntucondensed text-[100px] my-auto">Modal</h1>
          </div>
        )}
        <button
          onClick={() => {
            setScale(0);
            setTimeout(() => {
              modal.current.classList.add('hidden');
            }, 500);
          }}
          className="mx-auto mt-5 w-[60px] rounded-full bg-white hover:bg-white/50"
        >
          Tutup
        </button>
      </motion.div>
    </div>
  );
};

export default Modal;
