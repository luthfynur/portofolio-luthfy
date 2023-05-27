import Logo from "./Logo";

export default function Header({
  height = "",
  width = "",
  padding = "",
  background = "",
  selected = "",
}) {
  return (
    <header>
      <div
        className={`flex flex-row z-50 ${height} ${width} ${padding} ${background} ${
          selected === "header" ? "animate-bounce" : ""
        } drop-shadow-2xl`}
      >
        <div className="flex basis-2/3 sm:basis-1/2 h-full">
          <Logo
            font="font-ubuntucondensed font-bold"
            size="text-[5vw] sm:text-[20px]"
            color="text-white"
            align="text-left tracking-widest"
            margin="mt-auto mb-auto"
            visibility="hidden sm:block"
            selected={selected}
          />
        </div>
        <div className="sm:hidden flex basis-1/2 justify-end">
          <Logo
            font="font-ubuntucondensed font-bold"
            size="text-[5vw] sm:text-[20px]"
            color="text-white"
            align="text-left tracking-widest"
            margin="mt-auto mb-auto"
            visibility="sm-hidden"
            selected={selected}
          />{" "}
        </div>
      </div>
    </header>
  );
}
