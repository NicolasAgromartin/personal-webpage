// context
import { useHeaderContext } from "./context/HeaderContextProvider";
// icons
import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5';
// react
import { useRef } from "react";




export default function Header() {

  const headerRef = useRef(null);
  const { isOpen, toggleMenu, prevScrollPosition, setPrevScrollPosition } = useHeaderContext();


  window.addEventListener('scroll',() =>{
    document.documentElement.scrollTop > prevScrollPosition ?
    (headerRef.current.style.top = '-100px')
      :
    (headerRef.current.style.top = '0')

    setPrevScrollPosition( document.documentElement.scrollTop)
  })




  return (
    <header ref={headerRef} className='w-full h-16 top-0 left-0 fixed flex justify-end items-center p-4 bg-background z-50 
      border-b-[1px] border-b-border
      transition-all ease-linear'>
      <IoMenuOutline onClick={toggleMenu} className="text-4xl sm:hidden"  />

      <menu className={`
        transition-all
        absolute top-0  w-screen h-screen flex flex-col justify-evenly items-center bg-background
        sm:static sm:w-full sm:h-full sm:flex-row sm:bg-none
        md:w-1/2
        ${isOpen? 'right-0' : '-right-full'}`}>

        <span className="w-full h-15 flex justify-end items-center absolute top-0 left-0 p-4  sm:hidden">
          <IoCloseOutline onClick={toggleMenu} className="text-4xl" />
        </span>
        <a href="#Home" onClick={toggleMenu}> Inicio </a>
        <a href="#About" onClick={toggleMenu}> Acerca de mi </a>
        <a href="#Briefcase" onClick={toggleMenu}> Portafolio </a>
        <a href="#Contact" onClick={toggleMenu}> Contacto </a>
      </menu>
    </header>
  )
}
