export default function ContactCard({
  image,
  imageAlt,
  text,
  link,
  target,
  selected,
}) {
  return (
    <div
      className={`flex flex-row p-2 hover:opacity-50 h-fit w-full mb-2 ${
        selected === 'contact-card' ? 'animate-bounce' : ''
      }`}
    >
      <div className="w-[40px] h-[40px] sm:w-[96px] sm:h-[96px] bg-white rounded-full p-1">
        <img src={image} alt={imageAlt} />
      </div>
      <a
        href={link}
        className="text-white font-ubuntucondensed xl:text-[4vw] sm:text-[5vw] text-[20px] pl-6 pt-1 sm:pt-2"
        target={target}
      >
        {text}
      </a>
    </div>
  );
}
