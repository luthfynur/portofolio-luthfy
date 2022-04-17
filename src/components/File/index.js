const File = ({
  onClick,
  name = '',
  extended,
  sub = 0,
  disabled,
  hidden = false,
  currentFolder = '',
  selected = '',
  icon = '',
  color = '',
  iconMarginRight = '',
  href = '#',
}) => {
  return (
    <a href={href} className="w-full h-fit">
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
            : sub === 4
            ? 'pl-[56px]'
            : ''
        }
        ${currentFolder === name ? 'bg-black' : 'bg-transparent'}
        ${selected === 'file' ? 'animate-bounce' : ''}
        `}
      >
        <p
          className={`flex ${
            extended ? 'rotate-90 mt-[1px]' : ''
          } w-fit mr-1 ${color} text-[11px] mt-auto mb-auto font-fredokaone ${iconMarginRight}`}
        >
          {icon}
        </p>
        {name}
      </div>
    </a>
  );
};

export default File;
