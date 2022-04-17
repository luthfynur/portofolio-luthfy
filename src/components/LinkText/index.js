const LinkText = ({ href = '#', text = '', selected = '', disabled }) => {
  return (
    <span
      className={`ml-[4px] text-[white]  hover:text-black border-white border-solid border-2
      rounded-lg text-[5vw] sm:text-[2vw] pl-1 pr-1 h-fit w-fit inline-flex ${
        selected === 'linktext' ? 'animate-bounce' : ''
      } ${
        disabled
          ? 'bg-black/50 hover:bg-black/50 pointer-events-none '
          : 'bg-[#6D9886] hover:bg-[#DECDC3]'
      }`}
    >
      <a href={href} target="_blank" rel="noreferrer">
        {text}
      </a>
    </span>
  );
};

export default LinkText;
