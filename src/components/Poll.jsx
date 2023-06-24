import styles from './Poll.module.css';

export function Poll(){
    return (
        <div className={styles.container}>
          <h2 className={styles.question}>Qual comida você deseja que seja servida na Sexta?</h2>
          <ul className={styles.options}>
            <li>
              <input type="radio" name="comida" value="Lasanha" />
              <label>Lasanha de Carne</label>
            </li>
            <li>
              <input type="radio" name="comida" value="Frango" />
              <label>Iscas de Frango</label>
            </li>
            <li>
              <input type="radio" name="comida" value="Paçoca" />
              <label>Paçoca</label>
            </li>
          </ul>
          <button className={styles.submit}>Enviar</button>
        </div>
      );
}


