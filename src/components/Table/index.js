const skillData = [
  {
    skillName: 'HTML',
    level: 'Proficient',
  },
  {
    skillName: 'CSS',
    level: 'Competent',
  },
  {
    skillName: 'JavaScript',
    level: 'Competent',
  },
  {
    skillName: 'TypeScript',
    level: 'Beginner',
  },
  {
    skillName: 'SQL',
    level: 'Advanced',
  },
  {
    skillName: 'React',
    level: 'Competent',
  },
  {
    skillName: 'Redux',
    level: 'Advanced',
  },
  {
    skillName: 'Tailwind-CSS',
    level: 'Proficient',
  },
  {
    skillName: 'Material-UI',
    level: 'Advanced',
  },
  {
    skillName: 'Ant Design',
    level: 'Advanced',
  },
  {
    skillName: 'NodeJS',
    level: 'Competent',
  },
  {
    skillName: 'ExpressJS',
    level: 'Competent',
  },
  {
    skillName: 'MySQL',
    level: 'Competent',
  },
  {
    skillName: 'MongoDB',
    level: 'Beginner',
  },
  {
    skillName: 'Microservices Architecture',
    level: 'Beginner',
  },
  {
    skillName: 'Docker',
    level: 'Beginner',
  },
  {
    skillName: 'Kubernetes',
    level: 'Beginner',
  },
  {
    skillName: 'Git',
    level: 'Beginner',
  },
];

export default function Table({ selected }) {
  return (
    <table
      id="skill-table"
      className={`bg-[#6D9886] ${
        selected === 'table' ? 'animate-bounce' : ''
      } sm:text-xl`}
    >
      <tbody>
        <tr className="border-2 border-black">
          <th className="border-r-2 border-black">Skill</th>
          <th>Level</th>
        </tr>
        {skillData.map((element, idx) => {
          return (
            <tr key={idx} className="bg-[#F6F6F6] border-2 border-black">
              <th className="text-left p-2">{element.skillName}</th>
              <th className="text-left p-2 border-l-2 border-black">
                {element.level}
              </th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
