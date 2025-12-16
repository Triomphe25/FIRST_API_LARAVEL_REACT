import axios from 'axios'
import React, {use, useState} from 'react'
import { useNavigate } from 'react-router-dom'

export default function Register() {

    let navigate= useNavigate();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleRegistratiion = async (e)=>{
        e.preventDefault();
        //verifier qur tout les champs sont rempli
        const backendUrl = import.meta.env.VITE_BACKEND_URL;
        if(name != "" && email != "" && password != ""){

            await axios.post(`${backendUrl}/register`,{name, email, password})
            .then((res)=>navigate('/login'))
            .catch((err)=>{
                console.error(err);
            });


        }else{
            alert("veuillez remplir tout le champs")
        }
    }

  return (
    <div>
        <form onSubmit={handleRegistratiion}>
            <h4>inscrivez vous </h4>
            <input type="text"  placeholder='Nom' onChange={(e)=>setName(e.target.value)} value={name}/>
            <input type="email"  placeholder='Email' onChange={(e)=>setEmail(e.target.value)} value={email}/>
            <input type="password"  placeholder='password' onChange={(e)=>setPassword(e.target.value)} value={password}/>

            <button type='submit'> M'inscrire</button>
        </form>
    </div>
  )
}
