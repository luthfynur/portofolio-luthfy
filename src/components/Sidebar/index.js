import { useState } from 'react';
import Folder from '../Folder';
import File from '../File';
import Modal from '../Modal';

const SideBar = ({ setSelected, selected, sidebarToggle }) => {
  const [currentFolder, setCurrentFolder] = useState('portofolio-luthfy');
  const [extPortofolio, setExtPortofolio] = useState(true);
  const [extSrc, setExtSrc] = useState(false);
  const [extAssets, setExtAssets] = useState(false);
  const [extImages, setExtImages] = useState(false);
  const [extComponents, setExtComponents] = useState(false);
  const [extHooks, setExtHooks] = useState(false);
  const [imageName, setImageName] = useState(null);
  const [updater, setUpdater] = useState(0);

  return (
    <div
      id="sidebar"
      className={`bg-sidebar/90 sm:bg-sidebar mt-[49px] sm:mt-[50px] w-[210px] h-[95vh] ${
        sidebarToggle ? 'fixed' : 'hidden'
      } z-40 sm:flex sm:flex-col sm:fixed items-start select-none  ${
        selected === 'sidebar' ? 'animate-pulse' : ''
      } overflow-y-auto overflow-visible pb-10 pt-0 pl-1`}
    >
      <Modal selected={selected} imageName={imageName} updater={updater} />
      <Folder
        name="portofolio-luthfy"
        onClick={() => {
          setExtPortofolio(!extPortofolio);
          setSelected('');
          setCurrentFolder('portofolio-luthfy');
        }}
        extended={extPortofolio}
        currentFolder={currentFolder}
        selected={selected}
      />
      <Folder
        name="node-modules"
        sub={1}
        disabled
        hidden={!extPortofolio}
        selected={selected}
      />
      <Folder
        name="public"
        sub={1}
        disabled
        hidden={!extPortofolio}
        selected={selected}
      />
      <Folder
        name="src"
        onClick={() => {
          setSelected('');
          setExtSrc(!extSrc);
          setCurrentFolder('src');
        }}
        extended={extSrc}
        sub={1}
        hidden={!extPortofolio}
        currentFolder={currentFolder}
        selected={selected}
      />
      <Folder
        name="assets"
        sub={2}
        hidden={!extPortofolio || !extSrc}
        extended={extAssets}
        onClick={() => {
          setExtAssets(!extAssets);
          setSelected('');
          setCurrentFolder('assets');
        }}
        currentFolder={currentFolder}
        selected={selected}
      />
      <Folder
        name="Images"
        sub={3}
        hidden={!extPortofolio || !extSrc || !extAssets}
        extended={extImages}
        onClick={() => {
          setExtImages(!extImages);
          setSelected('images');
          setCurrentFolder('Images');
        }}
        currentFolder={currentFolder}
        selected={selected}
      />
      <File
        name="advice-generator.png"
        icon="🖼️"
        color="text-[#EAEA7F]"
        sub={4}
        hidden={!extPortofolio || !extSrc || !extAssets || !extImages}
        onClick={() => {
          setSelected('advice-generator.png');
          setCurrentFolder('advice-generator.png');
          setImageName('advice-generator.png');
          setUpdater(updater + 1);
        }}
        currentFolder={currentFolder}
        selected={selected}
      />
      <File
        name="bakhum.png"
        icon="🖼️"
        color="text-[#EAEA7F]"
        sub={4}
        hidden={!extPortofolio || !extSrc || !extAssets || !extImages}
        onClick={() => {
          setSelected('bakhum.png');
          setCurrentFolder('bakhum.png');
          setImageName('bakhum.png');
          setUpdater(updater + 1);
        }}
        currentFolder={currentFolder}
        selected={selected}
      />
      <File
        name="comments-section.png"
        icon="🖼️"
        color="text-[#EAEA7F]"
        sub={4}
        hidden={!extPortofolio || !extSrc || !extAssets || !extImages}
        onClick={() => {
          setSelected('comments-section.png');
          setCurrentFolder('comments-section.png');
          setImageName('comments-section.png');
          setUpdater(updater + 1);
        }}
        currentFolder={currentFolder}
        selected={selected}
      />
      <File
        name="e-voting.png"
        icon="🖼️"
        color="text-[#EAEA7F]"
        sub={4}
        hidden={!extPortofolio || !extSrc || !extAssets || !extImages}
        onClick={() => {
          setSelected('e-voting.png');
          setCurrentFolder('e-voting.png');
          setImageName('e-voting.png');
          setUpdater(updater + 1);
        }}
        currentFolder={currentFolder}
        selected={selected}
      />
      <File
        name="icon-close.svg"
        icon="🖼️"
        color="text-[#EAEA7F]"
        sub={4}
        hidden={!extPortofolio || !extSrc || !extAssets || !extImages}
        onClick={() => {
          setSelected('icon-close.svg');
          setCurrentFolder('icon-close.svg');
          setImageName('icon-close.svg');
          setUpdater(updater + 1);
        }}
        currentFolder={currentFolder}
        selected={selected}
      />
      <File
        name="icon-hamburger.svg"
        icon="🖼️"
        color="text-[#EAEA7F]"
        sub={4}
        hidden={!extPortofolio || !extSrc || !extAssets || !extImages}
        onClick={() => {
          setSelected('icon-hamburger.svg');
          setCurrentFolder('icon-hamburger.svg');
          setImageName('icon-hamburger.svg');
          setUpdater(updater + 1);
        }}
        currentFolder={currentFolder}
        selected={selected}
      />
      <File
        name="icons8-facebook.png"
        icon="🖼️"
        color="text-[#EAEA7F]"
        sub={4}
        hidden={!extPortofolio || !extSrc || !extAssets || !extImages}
        onClick={() => {
          setSelected('icons8-facebook.png');
          setCurrentFolder('icons8-facebook.png');
          setImageName('icons8-facebook.png');
          setUpdater(updater + 1);
        }}
        currentFolder={currentFolder}
        selected={selected}
      />
      <File
        name="icons8-github.png"
        icon="🖼️"
        color="text-[#EAEA7F]"
        sub={4}
        hidden={!extPortofolio || !extSrc || !extAssets || !extImages}
        onClick={() => {
          setSelected('icons8-github.png');
          setCurrentFolder('icons8-github.png');
          setImageName('icons8-github.png');
          setUpdater(updater + 1);
        }}
        currentFolder={currentFolder}
        selected={selected}
      />
      <File
        name="icons8-gmail.png"
        icon="🖼️"
        color="text-[#EAEA7F]"
        sub={4}
        hidden={!extPortofolio || !extSrc || !extAssets || !extImages}
        onClick={() => {
          setSelected('icons8-gmail.png');
          setCurrentFolder('icons8-gmail.png');
          setImageName('icons8-gmail.png');
          setUpdater(updater + 1);
        }}
        currentFolder={currentFolder}
        selected={selected}
      />
      <File
        name="icons8-whatsapp.png"
        icon="🖼️"
        color="text-[#EAEA7F]"
        sub={4}
        hidden={!extPortofolio || !extSrc || !extAssets || !extImages}
        onClick={() => {
          setSelected('icons8-whatsapp.png');
          setCurrentFolder('icons8-whatsapp.png');
          setImageName('icons8-whatsapp.png');
          setUpdater(updater + 1);
        }}
        currentFolder={currentFolder}
        selected={selected}
      />
      <File
        name="photo.jpg"
        icon="🖼️"
        color="text-[#EAEA7F]"
        sub={4}
        hidden={!extPortofolio || !extSrc || !extAssets || !extImages}
        onClick={() => {
          setSelected('photo.jpg');
          setCurrentFolder('photo.jpg');
          setImageName('photo.jpg');
          setUpdater(updater + 1);
        }}
        currentFolder={currentFolder}
        selected={selected}
      />
      <File
        name="portofolio.png"
        icon="🖼️"
        color="text-[#EAEA7F]"
        sub={4}
        hidden={!extPortofolio || !extSrc || !extAssets || !extImages}
        onClick={() => {
          setSelected('portofolio.png');
          setCurrentFolder('portofolio.png');
          setImageName('portofolio.png');
          setUpdater(updater + 1);
        }}
        currentFolder={currentFolder}
        selected={selected}
      />
      <File
        name="space-tourism.png"
        icon="🖼️"
        color="text-[#EAEA7F]"
        sub={4}
        hidden={!extPortofolio || !extSrc || !extAssets || !extImages}
        onClick={() => {
          setSelected('space-tourism.png');
          setCurrentFolder('space-tourism.png');
          setImageName('space-tourism.png');
          setUpdater(updater + 1);
        }}
        currentFolder={currentFolder}
        selected={selected}
      />

      <File
        name="tip-calculator.png"
        icon="🖼️"
        color="text-[#EAEA7F]"
        sub={4}
        hidden={!extPortofolio || !extSrc || !extAssets || !extImages}
        onClick={() => {
          setSelected('tip-calculator.png');
          setCurrentFolder('tip-calculator.png');
          setImageName('tip-calculator.png');
          setUpdater(updater + 1);
        }}
        currentFolder={currentFolder}
        selected={selected}
      />

      <Folder
        name="components"
        sub={2}
        hidden={!extPortofolio || !extSrc}
        extended={extComponents}
        onClick={() => {
          setExtComponents(!extComponents);
          setSelected('');
          setCurrentFolder('components');
        }}
        currentFolder={currentFolder}
        selected={selected}
      />
      <File
        name="Card"
        href="#project"
        icon="JS"
        color="text-[#EAEA7F]"
        sub={3}
        hidden={!extPortofolio || !extSrc || !extComponents}
        onClick={() => {
          setSelected('card');
          setCurrentFolder('Card');
        }}
        currentFolder={currentFolder}
        selected={selected}
      />
      <File
        name="Contact"
        href="#contact"
        icon="JS"
        color="text-[#EAEA7F]"
        sub={3}
        hidden={!extPortofolio || !extSrc || !extComponents}
        onClick={() => {
          setSelected('contact');
          setCurrentFolder('Contact');
        }}
        currentFolder={currentFolder}
        selected={selected}
      />
      <File
        name="ContactCard"
        href="#contact"
        icon="JS"
        color="text-[#EAEA7F]"
        sub={3}
        hidden={!extPortofolio || !extSrc || !extComponents}
        onClick={() => {
          setSelected('contact-card');
          setCurrentFolder('ContactCard');
        }}
        currentFolder={currentFolder}
        selected={selected}
      />
      <File
        name="Descriptions"
        href="#descriptions"
        icon="JS"
        color="text-[#EAEA7F]"
        sub={3}
        hidden={!extPortofolio || !extSrc || !extComponents}
        onClick={() => {
          setSelected('descriptions');
          setCurrentFolder('Descriptions');
        }}
        currentFolder={currentFolder}
        selected={selected}
      />
      <File
        name="File"
        icon="JS"
        color="text-[#EAEA7F]"
        sub={3}
        hidden={!extPortofolio || !extSrc || !extComponents}
        onClick={() => {
          setSelected('file');
          setCurrentFolder('File');
        }}
        currentFolder={currentFolder}
        selected={selected}
      />
      <File
        name="Folder"
        icon="JS"
        color="text-[#EAEA7F]"
        sub={3}
        hidden={!extPortofolio || !extSrc || !extComponents}
        onClick={() => {
          setSelected('folder');
          setCurrentFolder('Folder');
        }}
        currentFolder={currentFolder}
        selected={selected}
      />
      <File
        name="Header"
        icon="JS"
        color="text-[#EAEA7F]"
        sub={3}
        hidden={!extPortofolio || !extSrc || !extComponents}
        onClick={() => {
          setSelected('header');
          setCurrentFolder('Header');
        }}
        currentFolder={currentFolder}
        selected={selected}
      />
      <File
        name="LinkText"
        icon="JS"
        color="text-[#EAEA7F]"
        sub={3}
        hidden={!extPortofolio || !extSrc || !extComponents}
        onClick={() => {
          setSelected('linktext');
          setCurrentFolder('LinkText');
        }}
        currentFolder={currentFolder}
        selected={selected}
        href="#descriptions"
      />
      <File
        name="LogoText"
        icon="JS"
        color="text-[#EAEA7F]"
        sub={3}
        hidden={!extPortofolio || !extSrc || !extComponents}
        onClick={() => {
          setSelected('logotext');
          setCurrentFolder('LogoText');
        }}
        currentFolder={currentFolder}
        selected={selected}
      />
      <File
        name="Modal"
        icon="JS"
        color="text-[#EAEA7F]"
        sub={3}
        hidden={!extPortofolio || !extSrc || !extComponents}
        onClick={() => {
          setSelected('modal');
          setImageName(null);
          setUpdater(updater + 1);
          setCurrentFolder('Modal');
        }}
        currentFolder={currentFolder}
        selected={selected}
      />
      <File
        name="Photo"
        icon="JS"
        color="text-[#EAEA7F]"
        sub={3}
        hidden={!extPortofolio || !extSrc || !extComponents}
        onClick={() => {
          setSelected('photo');
          setCurrentFolder('Photo');
        }}
        currentFolder={currentFolder}
        selected={selected}
        href="#descriptions"
      />
      <File
        name="Project"
        icon="JS"
        color="text-[#EAEA7F]"
        sub={3}
        hidden={!extPortofolio || !extSrc || !extComponents}
        onClick={() => {
          setSelected('project');
          setCurrentFolder('Project');
        }}
        currentFolder={currentFolder}
        selected={selected}
        href="#project"
      />
      <File
        name="ProjectCard"
        icon="JS"
        color="text-[#EAEA7F]"
        sub={3}
        hidden={!extPortofolio || !extSrc || !extComponents}
        onClick={() => {
          setSelected('project-card');
          setCurrentFolder('ProjectCard');
        }}
        currentFolder={currentFolder}
        selected={selected}
        href="#project-card"
      />
      <File
        name="Sidebar"
        icon="JS"
        color="text-[#EAEA7F]"
        sub={3}
        hidden={!extPortofolio || !extSrc || !extComponents}
        onClick={() => {
          setSelected('sidebar');
          setCurrentFolder('Sidebar');
        }}
        currentFolder={currentFolder}
        selected={selected}
      />
      <File
        name="Skill"
        icon="JS"
        color="text-[#EAEA7F]"
        sub={3}
        hidden={!extPortofolio || !extSrc || !extComponents}
        onClick={() => {
          setSelected('skill');
          setCurrentFolder('Skill');
        }}
        currentFolder={currentFolder}
        selected={selected}
        href="#skill"
      />
      <File
        name="Table"
        icon="JS"
        color="text-[#EAEA7F]"
        sub={3}
        hidden={!extPortofolio || !extSrc || !extComponents}
        onClick={() => {
          setSelected('table');
          setCurrentFolder('Table');
        }}
        currentFolder={currentFolder}
        selected={selected}
        href="#skill-table"
      />
      <Folder
        name="hooks"
        sub={2}
        hidden={!extPortofolio || !extSrc}
        extended={extHooks}
        onClick={() => {
          setExtHooks(!extHooks);
          setSelected('');
          setCurrentFolder('hooks');
        }}
        currentFolder={currentFolder}
        selected={selected}
      />
      <File
        name="useImage.js"
        icon="JS"
        color="text-[#EAEA7F]"
        sub={3}
        hidden={!extPortofolio || !extSrc || !extHooks}
        disabled
        selected={selected}
      />
      <File
        name="App.css"
        icon="#"
        color="text-[#22577E]"
        iconMarginRight="mr-[8px]"
        sub={2}
        hidden={!extPortofolio || !extSrc || !extComponents}
        disabled
        selected={selected}
      />
      <File
        name="App.js"
        icon="JS"
        color="text-[#EAEA7F]"
        sub={2}
        hidden={!extPortofolio || !extSrc}
        onClick={() => {
          setSelected('appjs');
          setCurrentFolder('App.js');
        }}
        currentFolder={currentFolder}
        selected={selected}
      />
      <File
        name="App.test.js"
        icon="JS"
        color="text-[#EAEA7F]"
        sub={2}
        hidden={!extPortofolio || !extSrc}
        disabled
        selected={selected}
      />
      <File
        name="index.css"
        icon="#"
        color="text-[#22577E]"
        iconMarginRight="mr-[8px]"
        sub={2}
        hidden={!extPortofolio || !extSrc || !extComponents}
        disabled
        selected={selected}
      />
      <File
        name="index.js"
        icon="JS"
        color="text-[#EAEA7F]"
        sub={2}
        hidden={!extPortofolio || !extSrc}
        disabled
        selected={selected}
      />
      <File
        name="reportWebVitals.js"
        icon="JS"
        color="text-[#EAEA7F]"
        sub={2}
        hidden={!extPortofolio || !extSrc}
        disabled
        selected={selected}
      />
      <File
        name="setupTests.js"
        icon="JS"
        color="text-[#EAEA7F]"
        sub={2}
        hidden={!extPortofolio || !extSrc}
        disabled
        selected={selected}
      />
      <File
        name=".gitignore"
        icon="?"
        color="text-white"
        sub={1}
        hidden={!extPortofolio}
        disabled
        selected={selected}
      />
      <File
        name="package-lock.json"
        icon="{}"
        color="text-[#EAEA7F]"
        sub={1}
        hidden={!extPortofolio}
        disabled
        selected={selected}
      />
      <File
        name="package.json"
        icon="{}"
        color="text-[#EAEA7F]"
        sub={1}
        hidden={!extPortofolio}
        disabled
        selected={selected}
      />
      <File
        name="postcss.config.js"
        icon="JS"
        color="text-[#EAEA7F]"
        iconMarginRight="ml-[-4px]"
        sub={1}
        hidden={!extPortofolio}
        disabled
        selected={selected}
      />
      <File
        name="README.md"
        icon="i"
        iconMarginRight="mr-[10px]"
        color="text-[#22577E]"
        sub={1}
        hidden={!extPortofolio}
        disabled
        selected={selected}
      />
      <File
        name="tailwind.config.js"
        icon="JS"
        iconMarginRight="ml-[-4px]"
        color="text-[#EAEA7F]"
        sub={1}
        hidden={!extPortofolio}
        disabled
        selected={selected}
      />
    </div>
  );
};

export default SideBar;
