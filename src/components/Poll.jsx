import styles from './Poll.module.css';
import { useState} from 'react'

export function Poll(){

  const [isChecked, setIsChecked] = useState()

    return (
        <div className={styles.container}>
          <h2 className={styles.question}>Qual comida você deseja que seja servida na Sexta?</h2>
          <ul className={styles.options}>
            <li>
              <input type="radio" name="comida" value="Lasanha" onClick={setIsChecked} />
              <label>Lasanha de Carne</label>
            </li>
            <li>
              <input type="radio" name="comida" value="Frango" onClick={setIsChecked} />
              <label>Iscas de Frango</label>
            </li>
            <li>
              <input type="radio" name="comida" value="Paçoca" onClick={setIsChecked} />
              <label>Paçoca</label>
            </li>
          </ul>
          <button disabled={!isChecked} className={styles.submit}>Enviar</button>
        </div>
      );
}


