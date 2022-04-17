const Folder = ({
  onClick,
  name = '',
  extended,
  sub = 0,
  disabled,
  hidden = false,
  currentFolder = '',
  selected = '',
}) => {
  return (
    <div className="w-full h-fit cursor-pointer">
      <div
        onClick={onClick}
        className={`flex flex-row h-30px w-full text-[16px] text-white ${
          disabled ? 'text-white/50 cursor-not-allowed' : ''
        } ${hidden ? 'hidden' : ''} text-left 
        ${
          sub === 1
            ? 'pl-[14px]'
            : sub === 2
            ? 'pl-[28px]'
            : sub === 3
            ? 'pl-[42px]'
            : ''
        }
        ${currentFolder === name ? 'bg-black' : 'bg-transparent'}
        ${selected === 'folder' ? 'animate-bounce' : ''}
        `}
      >
        <p
          className={`flex ${
            extended ? 'rotate-90 mt-[1px]' : ''
          } w-fit font-kleeone mr-1`}
        >{`>`}</p>
        {name}
      </div>
    </div>
  );
};

export default Folder;
