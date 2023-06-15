// styled-components
import { Logo } from '../../styled-components/styled-logo';
import { ActionButton } from "../../styled-components/styled-buttons";
import { Rectangles } from "../../styled-components/styled-decorations";
// react-icons
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { MediaLinks } from './styled-components/styled-media';
// framer motion
import { motion } from 'framer-motion';
import { opacity } from '../../assets/variants';

export default function Home() {

  return (
    <motion.div className="w-full min-h-screen flex flex-col justify-start items-center gap-4 p-4 pt-32 xl:pt-48 relative" id='Home' initial='hidden' animate='visible' transition={{ staggerChildren: .4 }} >

      <motion.div className="w-32 h-32  
        sm:w-40 sm:h-40
        md:w-48 md:h-48 
        lg:w-48 lg:h-48 
        xl:w-64 xl:h-64
        z-10" variants={opacity}>
        <Logo background='blue' />
      </motion.div>

      <div className="w-full h-40 flex flex-col justify-center items-center gap-1 z-10">
        <motion.h1 variants={opacity} className="text-2xl font-normal sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl ">
          Nicolas Agromartin
        </motion.h1>
        <motion.h2 className="font-light sm:text-xl" variants={opacity}>
          Frontend web developer 
        </motion.h2>
      </div>

      <ActionButton href='#About' className="z-10" variant='blue' 
        variants={opacity} as={motion.a} whileHover={{scale: 1.1}} whileTap={{scale:.9}} >
        Sobre mi
      </ActionButton>

      <motion.div className='absolute bottom-0 left-0 w-full h-1 flex justify-evenly sm:bottom-40' variants={opacity} >
        <Rectangles orientation='left' className='bottom-0 -left-32 lg:left-0'  />
        <Rectangles orientation='right' className='hidden bottom-0 -right-32 lg:right-0 sm:flex' /> 
      </motion.div>
    
      <span className='w-full flex justify-end sm:justify-center'>
        <MediaLinks as={motion.div} variants={opacity}>
          <motion.a href="https://www.linkedin.com/in/nicolas-agromartin/" target='__blank'  whileHover={{color:'#1868C3'}}> 
            <AiFillLinkedin  />
          </motion.a>

          <motion.a href="https://github.com/NicolasAgromartin" target='__blank' whileHover={{color:'#1868C3'}}>
            <AiFillGithub  />
          </motion.a>
        </MediaLinks>
      </span>
    </motion.div>
  )
}
