import { createContext, useContext, useState,  } from "react"
import PropTypes from 'prop-types';

const HeaderContext = createContext();
HeaderContextProvider.propTypes = {
  children: PropTypes.node,
}

export function HeaderContextProvider({ children }){

  const[isOpen, setIsOpen] = useState(true);
  const[prevScrollPosition, setPrevScrollPosition] = useState(window.scrollY);

  function toggleMenu(){ 
    setIsOpen(!isOpen);
  }

  return (
    <HeaderContext.Provider value={{ isOpen, toggleMenu, prevScrollPosition, setPrevScrollPosition }}> 
      { children }
    </HeaderContext.Provider>
  )
}

export function useHeaderContext() {
  return useContext(HeaderContext)
}