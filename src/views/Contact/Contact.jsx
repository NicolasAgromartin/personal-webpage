// icons
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
// components
import Form from './components/Form';
import { Squares } from '../../styled-components/styled-decorations';
// react
import  { useEffect } from 'react'; 
// framer motion
import { motion, useAnimation } from 'framer-motion';
// variants
import { opacity, fromAbove } from '../../assets/variants';
// reactintersectionobserver
import { useInView } from "react-intersection-observer";


export default function Contact() {

  const controls = useAnimation();
  const [ ref, inView ] = useInView();

  useEffect(() => {
    inView && controls.start('visible')
  },[controls , inView])


  return (
    <motion.div initial='hidden' animate={controls} transition={{staggerChildren:.4}}
      className="w-full min-h-screen flex justify-center items-end flex-col sm:flex-row flex-wrap" id="Contact">

      <motion.div className='hidden sm:flex relative -translate-y-[60vh]' variants={opacity}> 
        <Squares />
      </motion.div>

    {/* form */}
      <motion.div ref={ref} className="w-full min-h-[500px]  flex flex-col justify-center items-center md:p-8 pt-12 pb-12 gap-12 md:w-1/2 md:min-h-screen" transition={{staggerChildren:.2}}>
        <div className='w-full flex flex-col gap-2 text-center z-20 '>
          <motion.h2  variants={fromAbove} className=' uppercase 
          text-2xl 
          md:text-3xl 
          lg:text-4xl
          xl:text-5xl '>Contacto</motion.h2>
          <motion.p  variants={fromAbove}>Te invito a dejarme un mensaje</motion.p>
        </div>
        <motion.span className='w-full h-full flex justify-center items-center'  variants={opacity}>
          <Form />
        </motion.span>
      </motion.div>

      <motion.div className='hidden sm:flex relative -translate-y-[20vh] translate-x-[10vw]' variants={opacity}> 
        <Squares orientation='top' />
      </motion.div>


    {/* footer */}
      <div className="w-full h-40 bg-border flex flex-col justify-evenly items-center p-4 shadow-2xl">
        <p className='w-full text-sm text-center '>Sitie made by<a href="https://www.linkedin.com/in/nicolas-agromartin/" className="text-primary" target='__blank'> Nicolas Agromartin</a> </p>
        <span className='w-full flex justify-center items-center gap-12'>
          <a href="https://www.linkedin.com/in/nicolas-agromartin/" target='__blank'className='text-xl' > <AiFillLinkedin /> </a>
          <a href="https://github.com/NicolasAgromartin" target='__blank' className='text-sm md:text-xl'> <AiFillGithub /> </a>
        </span>
      </div>

    </motion.div>
  )
}
