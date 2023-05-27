const Photo = ({ selected = '' }) => {
  return (
    <div
      className={`w-[60vw] h-[60vw] sm:w-[15vw] sm:h-[15vw] rounded-full bg-[#6D9886] 
      bg-photo bg-contain bg-[center_top_2rem] sm:bg-[center_top_2rem] bg-no-repeat border-4 
      border-solid border-black ${selected === 'photo' ? 'animate-spin' : ''}`}
    />
  );
};

export default Photo;
