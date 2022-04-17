import Descriptions from './components/Descriptions';
import Header from './components/Header';
import { useState } from 'react';
import SideBar from './components/Sidebar';
import Project from './components/Project';
import Skill from './components/Skill';
import Contact from './components/Contact';

function App() {
  const [selected, setSelected] = useState('');
  const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
    <div
      className={`${selected === 'appjs' ? 'animate-pulse' : 'animate-none'}`}
    >
      <Header
        height="h-[50px]"
        width="w-full fixed"
        background="bg-[#212121]"
        padding="pl-[20px] pr-[20px]"
        selected={selected}
        toggle={() => setSidebarToggle(!sidebarToggle)}
        opened={sidebarToggle}
      />
      <main className="flex flex-row w-full">
        <SideBar
          setSelected={setSelected}
          selected={selected}
          sidebarToggle={sidebarToggle}
        />
        <div
          id="content"
          onClick={() => {
            setSidebarToggle(false);
            setSelected('');
          }}
          className="flex flex-col w-full h-fit items-start mt-[50px] sm:pl-[210px]"
        >
          <Descriptions
            height="min-h-[60vh] sm:min-h-[30vh]"
            background="bg-[#F6F6F6]"
            padding="p-[20px] sm:p-[50px]"
            border="rounded-t-2xl sm:rounded-t-none sm:rounded-tr-2xl"
            selected={selected}
          />
          <Skill
            height="min-h-[80vh] sm:min-h-[50vh]"
            background="bg-black"
            padding="p-[20px] sm:p-[50px]"
            border="rounded-none"
            selected={selected}
          />
          <Project
            height="min-h-[80vh] sm:min-h-[50vh]"
            background="bg-[#D9CAB3]"
            padding="p-[20px] sm:p-[50px]"
            border="rounded-none"
            selected={selected}
          />

          <Contact
            height="min-h-[50vh] sm:min-h-[50vh]"
            background="bg-[#212121]"
            padding="p-[20px] sm:p-[50px]"
            border="rounded-none"
            selected={selected}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
