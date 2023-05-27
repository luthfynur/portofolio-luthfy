export default function Table({ selected, data, headerName, headerValue }) {
  return (
    <table
      id="skill-table"
      className={`bg-[#6D9886] ${
        selected === 'table' ? 'animate-bounce' : ''
      } sm:text-xl`}
    >
      <tbody>
        <tr className="border-2 border-black">
          <th className="border-r-2 border-black">{headerName}</th>
          <th>{headerValue}</th>
        </tr>
        {data.map((element, idx) => {
          return (
            <tr key={idx} className="bg-[#F6F6F6] border-2 border-black">
              <th className="text-left p-2">{element.name}</th>
              <th className="text-left p-2 border-l-2 border-black">
                {element.value}
              </th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
