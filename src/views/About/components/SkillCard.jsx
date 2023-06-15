// css
import './skillCard.css';
// icons
import responsiveIcon from './icons/responsive-skill-icon.svg';
import designIcon from './icons/design-skill-icon.svg';
import codeIcon from './icons/code-skill-icon.svg';
// framer motion
import { motion } from 'framer-motion';
import { opacity } from '../../../assets/variants';

const skillsDescription = {
  'responsive' : 'Con una metodología mobile first el desarrollo siempre se piensa primero en dispositivos mobiles',
  'clean code' : 'Mantener el codigo ordenado y prolijo es escencial para que sea reutilizable y facil de entender',
  'design' : 'Todo lo que hago pasa primero por una planeación previa tanto de diseño como de desarrollo'
}

// eslint-disable-next-line react/prop-types
export default function SkillCard({content, controls}) {
  return (
    <motion.div className="skill-card" id="SkillCard" variants={opacity} initial='hidden' animate={controls}>
      <h4>{content}</h4>
      <span className='skill-icon' >
        {content === 'responsive'&& <img src={responsiveIcon} alt="" />}
        {content === 'design'&& <img src={designIcon} alt="" />}
        {content === 'clean code'&& <img src={codeIcon} alt="" />}        
      </span>

      <div className='skill-description' >
        <p>{skillsDescription[content]}</p>
      </div>
    </motion.div>
  )
}
