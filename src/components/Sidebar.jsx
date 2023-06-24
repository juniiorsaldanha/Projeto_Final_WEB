import { PencilLine } from "phosphor-react"
import { UserSwitch } from "phosphor-react"
import { Avatar } from "./Avatar";

import styles from "./Sidebar.module.css";

export function Sidebar(){
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://www.ufc.br/images/_images/a_universidade/identidade_visual/brasao/brasao3_horizontal_cor_72dpi.png" 
            />

            <div className={styles.profile}>
                <Avatar src="https://github.com/juniiorsaldanha.png"/>

                <strong>Adm Saldanha</strong>
                <span>Administrador</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
                <br />
                <a href="#">
                    <UserSwitch size={20} />
                    Trocar Perfil
                </a>
            </footer>
        </aside>
    );
}