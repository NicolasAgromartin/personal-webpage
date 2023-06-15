// proptypes
import PropTypes from 'prop-types';
import { Logo } from '../../../styled-components/styled-logo';
ChallengeCard.propTypes = {
  content: PropTypes.object.isRequired,
};
// icons
import { AiFillGithub } from 'react-icons/ai';
import { CgWebsite } from 'react-icons/cg';

export default function ChallengeCard({content}) {
  
  return (
    <div className=" w-72 h-44 bg-white rounded-2xl m-4 p-4 flex flex-col gap-2 text-black shadow-2xl">
      <div className='w-full flex justify-start items-center gap-2'>
        <span className='w-6 h-6 flex '>
         <Logo background='white' /> 
        </span>
        <h3>{content.title}</h3>
      </div>
      <div className='w-full text-xs'>
        <p>{content.desc}</p>
      </div>
      <div className='w-full text-xs text-gray-400'>
        <p>{content.madeWith}</p>
      </div>
      <div className='w-full flex gap-4 text-xl'>
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
