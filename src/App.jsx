import React, { useState } from "react";
import { Input } from "./components/Input";
import api from './api/index'
import { useNavigate} from 'react-router-dom'

import 
  styles
 from "./app.module.css";

import Logo from './assets/Brasao_ufc.svg'

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isErrorEmail, setIsErrorEmail] = useState(false);
  const [isErrorPassword, setIsErrorPassword] = useState(false);

const navigate = useNavigate()

  async function handleSunmit(e) {
    e.preventDefault()
    await api.post('session', {
      email,
      password
    }).then(resp => {
      if (resp.status === 200){
        const { token, user } = resp.data
        
        localStorage.setItem('tokenRUGRAM', token)
        localStorage.setItem('userDATA', JSON.stringify(user))
        navigate("/home")
      }
    });
  }

  return (
    <main className={styles.Container}>
      <div className={styles.ContainerImage}>
        <img src={Logo} alt="image" />
      </div>
      <div className={styles.Content}>
        <h1>Bem Vindo!</h1>

        <form className={styles.Form}>
          <Input
            labelText="Email"
            InputType="text"
            disabled={false}
            isRequired
            name="Email"
            onChange={setEmail}
            placeholder="Digite seu email"
            value={email}
            mask=""
            isErrorState={isErrorEmail}
            setErrorState={setIsErrorEmail}
          />

          <Input
            labelText="Password"
            InputType="password"
            disabled={false}
            isRequired
            name="password"
            onChange={setPassword}
            placeholder="Digite sua senha"
            value={password}
            mask=""
            isErrorState={isErrorPassword}
            setErrorState={setIsErrorPassword}
          />

            <button className={styles.Button} onClick={handleSunmit}>Login</button>

        </form>
      </div>
    </main>
  );
}
