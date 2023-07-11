import styles from './Header.module.css'


export function Header(){
    return(
        <header className={styles.header}>
            <img src="https://www.ufc.br/images/_images/a_universidade/identidade_visual/brasao/brasao1_horizontal_cor_72dpi.png" alt="Logo da UFC" />
        </header>
    );
}