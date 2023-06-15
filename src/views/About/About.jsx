// components
import SkillCard from './components/SkillCard';
// styled-components
import { Logo } from '../../styled-components/styled-logo';
import { Squares } from '../../styled-components/styled-decorations';
// techs
const techs = ['React', 'CSS', 'HTML','Typescript', 'Styled-components', 'Tailwind', 'Scss', 'Canva',];
// react
import  { useEffect } from 'react'; 
// framer motion
import { motion, useAnimation } from 'framer-motion';
// variants
import { opacity, fromAbove, fromLeft } from '../../assets/variants';
// reactintersectionobserver
import { useInView } from "react-intersection-observer";

export default function About() {

  const controls = useAnimation();
  const [ ref, inView ] = useInView();

  useEffect(() => {
    inView && controls.start('visible')
  },[controls , inView])


    
  return (
    <div className="z-10 w-full min-h-screen flex flex-row flex-wrap p-4 gap-8 justify-center items-center 
      lg:gap-0 lg:items-start lg:pt-32 lg:pl-12 lg:pr-12 xl:pl-24 xl:pr-24 " id='About'>

      <motion.div ref={ref} className="w-full lg:w-[50%] flex flex-col gap-8 p-2 sm:p-4 relative" 
        initial='hidden' 
        animate={controls} 
        transition={{ staggerChildren: .4 }} >
        <motion.h2 variants={fromLeft} className="uppercase text-2xl md:text-3xl lg:text-4xl xl:text-5xl">Acerca de mi</motion.h2>
        <motion.p variants={fromLeft}>Como desarrollador front end, me encanta crear interfaces limpias e intuitivas y darle vida a mis sitios y aplicaciones web usando animaciones y transiciones suaves.</motion.p>
        
        <div className='hidden lg:flex justify-start translate-x-[250px] translate-y-[150px] items-end w-full h-full -z-10'>
          <motion.div className="relative" variants={opacity}>
            <Squares />
          </motion.div>
        </div>
      </motion.div>

      <motion.div ref={ref}  className="w-full lg:w-[50%] p-4 flex flex-row flex-wrap justify-center items-center gap-12 " 
        initial='hidden'
        animate={controls}
        transition={{staggerChildren:.3}} >
        <motion.h3 variants={fromAbove} className='w-full text-center sm:text-xl md:text-2xl '>Habilidades y aptitudes</motion.h3>
        <SkillCard content='responsive' controls={controls} />
        <SkillCard content='design' controls={controls}/>
        <SkillCard content='clean code' controls={controls}/>

        <div className='hidden xl:flex justify-end translate-x-[-200px] translate-y-[200px] items-end w-full h-full -z-10'>
          <motion.div className="relative" variants={opacity}>
            <Squares orientation='top' /> 
          </motion.div>
        </div>
      </motion.div>

      <motion.div className="w-full p-4 lg:mt-12" initial='hidden' animate={controls} transition={{staggerChildren:.2}}>
        <motion.p className="mb-4" variants={fromLeft}>Algunas de las tecnologías y librerias que uso tanto en el desarrollo como en la planeación son : </motion.p>
        <motion.span className='flex flex-row flex-wrap gap-2 justify-start items-center xl:w-1/2 ' transition={{staggerChildren:.3}}>
          {techs.map( tech => (
            <motion.div key={tech} className='m-3 flex gap-2 w-full sm:w-[200px]' variants={opacity}>
              <span className='w-5 h-5'>
                <Logo background='blue' />
              </span>
              <p className="text-sm font-light">{tech}</p>
            </motion.div>
          ))}
        </motion.span>
      </motion.div>
    </div>
  )
}
