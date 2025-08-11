
      import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function FormPage() {

    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [msg, setMsg] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log({ name, email, msg})

        if(!name){
            toast.error("Please enter name!")
        }

        setName("")
        setEmail("")
        setMsg("")

        // naviaget the somewhere
    }




  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          
          placeholder="Your Name" 
          value={name}
          onChange={(e)=>{setName(e.target.value)}}
       
        />
        <h2>{error}</h2>

        <br />
        <input 
          type="email" 
          placeholder="Your Email" 
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
           
        />
        <br />
        <textarea 
          name="message" 
          placeholder="Your Message" 
          value={msg}
          onChange={(e)=> setMsg(e.target.value)}
          
        />
        <br />
        <button type='submit'>Send</button>
      </form>
    </div>
  );
}

export default FormPage;