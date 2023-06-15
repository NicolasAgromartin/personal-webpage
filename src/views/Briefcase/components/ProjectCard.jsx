// icons
import { AiFillGithub } from 'react-icons/ai';
import { CgWebsite } from 'react-icons/cg';
// logo
import { Logo } from '../../../styled-components/styled-logo';
// proptypes
import PropTypes from 'prop-types';
ProjectCard.propTypes = {
  content: PropTypes.object.isRequired,
};

export default function ProjectCard({content}) {
  return (
    <div className='w-64 h-72 bg-white text-black rounded-xl m-8 flex flex-col justify-evenly items-center  z-20 shadow-xl'>
      <div className='w-full flex flex-row gap-4 pl-4 justify-start items-center '>
        <span className='w-8 h-8'>
          <Logo background='white' />          
        </span>
        <h3 className='text-xl text-left '>{content.title}</h3>
      </div>
      <div className='w-full pl-4 pr-4'>
        <p className='text-xs'>{content.desc}</p>
      </div>
      <div className='w-full pl-4'>
        <h4 className='text-xs text-gray-500'>{content.madeWith}</h4>
      </div>
      <div className='w-full flex gap-8 pl-4 text-2xl'>
        <a href={content.links.site} target='__blank'>
          <CgWebsite />
        </a>
        <a href={content.links.github} target='__blank'>
          <AiFillGithub />
        </a>
      </div>
    </div>
  )
}
