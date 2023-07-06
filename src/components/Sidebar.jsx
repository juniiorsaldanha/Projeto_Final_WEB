import { PencilLine } from "phosphor-react"
import { UserSwitch } from "phosphor-react"
import { ForkKnife } from "phosphor-react"
import { Avatar } from "./Avatar";
import { useState } from 'react'
import { useNavigate} from 'react-router-dom'

import styles from "./Sidebar.module.css";

export function Sidebar(){

    const navigate = useNavigate()

    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem('userDATA')) ?? {
            urlAvatar: '',
            username: '',
            admin: false
        }
    )

    function handleProfile(){
        localStorage.setItem('userDATA', '')
        localStorage.setItem('tokenRUGRAM', '')
        navigate("/login")
    }

    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://www.ufc.br/images/_images/a_universidade/identidade_visual/brasao/brasao3_horizontal_cor_72dpi.png" 
            />

            <div className={styles.profile}>
                <Avatar src={user.urlAvatar} />

                <strong>{user.username}</strong>
                <span>{user.admin ? 'administrador' : 'Aluno'}</span>
            </div>

            <footer>
                <a href="https://www.ufc.br/restaurante/cardapio/1-restaurante-universitario-de-fortaleza">
                    <ForkKnife size={20} />
                    Cardápio
                </a>   
                <a href="#" onClick={handleProfile}>
                    <UserSwitch size={20} />
                    Trocar Perfil
                </a>

            </footer>
        </aside>
    );
}