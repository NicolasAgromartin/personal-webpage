// components
import ProjectCard from "./components/ProjectCard";
import ChallengeCard from "./components/ChallengeCard";
// content
import { projects } from "./content/projects";
import { challenges } from "./content/challenge";
// styled-components
import { Column, Squares } from "../../styled-components/styled-decorations";
// react
import  { useEffect } from 'react'; 
// framer motion
import { motion, useAnimation } from 'framer-motion';
// variants
import { opacity, fromAbove } from '../../assets/variants';
// reactintersectionobserver
import { useInView } from "react-intersection-observer";




export default function Briefcase() {

  const controls = useAnimation();
  const [ ref, inView ] = useInView();

  useEffect(() => {
    inView && controls.start('visible')
  },[controls , inView])

  return (
    <motion.div className="w-full min-h-screen relative flex flex-row flex-wrap justify-start gap-12 items-start pt-8 pb-8 
    lg:pt-32 lg:gap-0" id='Briefcase' initial='hidden' animate={controls} transition={{staggerChildren:.4}}>
      
      <motion.h2 className="w-full text-center uppercase text-2xl md:text-3xl lg:text-4xl lg:text-left lg:pl-24 xl:text-5xl" variants={fromAbove} > 
      Portafolio</motion.h2>

      <div className="w-full min-h-[500px] flex flex-wrap justify-center items-center lg:w-1/2 z-20">  
        { projects.map( project => (
          <motion.span ref={ref} key={project.key} variants={opacity}>
            <ProjectCard content={project} key={project.key}  />
          </motion.span>
        )) }



        <span className="w-full h-64 flex justify-evenly center pl-40">
          <motion.span variants={opacity} className="relative transform -translate-x-40 -translate-y-10">
            <Squares small='true' orientation='top' />
          </motion.span>
          <motion.div variants={opacity} className="relative">
            <Column className="bottom-2" />
          </motion.div>            
        </span>
      </div>

      <div className="w-full min-h-[500px] flex flex-row flex-wrap justify-center items-center z-20 lg:w-1/2">  
        <motion.h3 variants={opacity} className="w-full text-center font-light text-xl p-4">Desafios completados para Frontend mentor</motion.h3>
        <span className=" hidden lg:flex w-full h-20 justify-end center pl-40 ">
          <motion.span variants={opacity} className="relative transform -translate-x-40 -translate-y-10 -z-10">
            <Squares />
          </motion.span>
        </span>
        
        { challenges.map( challenge => (
          <motion.span variants={opacity} key={challenge.key}>
            <ChallengeCard content={challenge}  />
          </motion.span>
        )) }
      
        <motion.p variants={opacity} className="w-full text-center">Podes ver mi perfil completo 
          <a href="https://www.frontendmentor.io/profile/NicolasAgromartin" className="text-primary" target='__blank'> acá </a> 
        </motion.p>
      </div>
    </motion.div>
  )
}
