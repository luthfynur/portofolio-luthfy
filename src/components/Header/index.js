import LogoText from '../LogoText';
import OpenSideBar from '../../assets/Images/icon-hamburger.svg';
import CloseSidebar from '../../assets/Images/icon-close.svg';

const Header = ({
  height = '',
  width = '',
  padding = '',
  background = '',
  selected = '',
  toggle,
  opened,
}) => {
  return (
    <header>
      <div
        className={`flex flex-row z-50 ${height} ${width} ${padding} ${background} ${
          selected === 'header' ? 'animate-bounce' : ''
        } drop-shadow-2xl`}
      >
        <div className="flex basis-2/3 sm:basis-1/2 h-full">
          <button
            onClick={toggle}
            className="bg-transparent h-[18px] w-[18px] my-auto sm:hidden mr-2"
          >
            <img src={opened ? CloseSidebar : OpenSideBar} alt="toggle" />
          </button>
          <LogoText
            font="font-fredokaone"
            size="text-[5vw] sm:text-[20px]"
            color="text-white"
            align="text-left tracking-widest"
            margin="mt-auto mb-auto"
            visibility="hidden sm:block"
            selected={selected}
          />
        </div>
        <div className="sm:hidden flex basis-1/2 justify-end">
          <LogoText
            font="font-fredokaone"
            size="text-[5vw] sm:text-[20px]"
            color="text-white"
            align="text-left tracking-widest"
            margin="mt-auto mb-auto"
            visibility="sm-hidden"
            selected={selected}
          />{' '}
        </div>
      </div>
    </header>
  );
};

export default Header;
