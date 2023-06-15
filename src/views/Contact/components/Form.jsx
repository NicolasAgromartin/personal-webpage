// mailjs
import emailjs from '@emailjs/browser';
import { publicKey, serviceId, templateId } from './emailjsData';
// styled-components
import { Input, TextArea } from "../styled-components/styled-form";
import { SubmitButton } from '../../../styled-components/styled-buttons';
// react
import { useState, useEffect, useRef } from "react";






export default function Form() {

  const regexMail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/;
  const formRef = useRef(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const [formState, setFormState] = useState({
    nameState:false,
    emailState:false,
    messageState:false,
  })

  useEffect(() =>{
    setFormState(({
      nameState: name.trim().length > 2,
      emailState: regexMail.test(email),
      messageState: message.trim().length > 10
    }));
  },[name,email,message])


  function handleSubmit(e){
    e.preventDefault();
    if(formState.emailState && formState.nameState && formState.messageState) {
      emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      setName('');
      setEmail('');
      setMessage('');
    }
  }





  return (
    <form className="w-full max-w-[500px] h-[500px] bg-white rounded-xl flex flex-col justify-evenly items-center gap-3 shadow-2xl text-black p-5 z-20 md:p-8 lg:p-12 lg:h-[500px]" onSubmit={handleSubmit} ref={formRef}>

      <span className="w-full flex flex-col gap-3 ">
        <label htmlFor="name" className="flex flex-row items-center gap-3"> 
          <div className={`w-4 h-4 rounded 
            ${formState.nameState === false&& 'bg-gray-200'} 
            ${formState.nameState === true && 'bg-primary'} 
            transition-all`} />
          Nombre
        </label>
        <Input name="name" id="Name" placeholder="Tu nombre" value={name} onChange={(e)=> setName(e.target.value)} />
      </span>

      <span className="w-full flex flex-col gap-3 ">
        <label htmlFor="email" className="flex flex-row items-center gap-3"> 
        <div className={`w-4 h-4 rounded 
          ${formState.emailState === false&& 'bg-gray-200'} 
          ${formState.emailState === true && 'bg-primary'} 
          transition-all`} />
          Email
        </label>
        <Input  name="email" id="Email" placeholder="Tu email" value={email} onChange={(e)=> setEmail(e.target.value)} />
      </span>


      <span className="w-full flex flex-col gap-3 ">
        <label htmlFor="message" className="flex flex-row items-center gap-3"> 
        <div className={`w-4 h-4 rounded 
          ${formState.messageState === false&& 'bg-gray-200'} 
          ${formState.messageState === true && 'bg-primary'} 
          transition-all`} />
          Mensaje
        </label>
        <TextArea name="message" id="Message" placeholder="Tu mensaje..." value={message} onChange={(e)=> setMessage(e.target.value)} />
      </span>

      <span>
        <SubmitButton type="submit" > 
          Enviar
        </SubmitButton>
      </span>
    </form>
  )
}
