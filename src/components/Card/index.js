import LinkText from '../LinkText';

const Card = ({
  id,
  width = '',
  height = '',
  padding = '',
  background = '',
  image,
  imageAlt,
  projectName = '',
  linkProject = '',
  linkSourceProject = '',
  disableLinkProject,
  disableSourceCode,
  selected = '',
}) => {
  return (
    <div
      id={id}
      className={`${
        selected === 'card' ? 'animate-pulse' : ''
      } flex flex-col z-10 ${width} ${height} ${padding} ${background} justify-start items-center rounded-xl`}
    >
      <div className="w-full rounded-xl h-fit">
        <img
          src={image}
          alt={imageAlt}
          className="h-[250px] w-full sm:w-[60vw] lg:w-[40vw] rounded-t-xl object-cover"
        />
      </div>
      <h1 className="text-black font-ubuntucondensed text-[7vw] sm:text-[5vw] lg:text-[3vw] text-center">
        {projectName}
      </h1>
      <div className="flex flex-row w-full h-fit justify-center mt-4 mb-4 gap-4">
        <LinkText
          text="Lihat"
          href={linkProject}
          disabled={disableLinkProject}
          selected={selected}
        />
        <LinkText
          text="Source Code"
          href={linkSourceProject}
          disabled={disableSourceCode}
          selected={selected}
        />
      </div>
    </div>
  );
};

export default Card;
