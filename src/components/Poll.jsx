import styles from './Poll.module.css';
import { useState, useEffect} from 'react'
import api from '../api/index'

export function Poll(){

  const [isChecked, setIsChecked] = useState()
  const [selectOption, setSelectOption] = useState()
  const [poll, setPoll] = useState()

    useEffect(() => {
      async function getInfo() {
        const resp = await api.get('/poll')
        setPoll(resp.data)
      }
      getInfo()
    }, [])


    async function handleVote(){
      setIsChecked(true)
      await api.post('/poll/vote', {
        option_id: selectOption,
        menu_id: poll.id
      }).then(() => {
        alert("Seu voto foi computado!")
      })
    }

    function handleSelect(id) {
      setIsChecked(true)
      setSelectOption(id)
    }
    
    return (
        <div className={styles.container}>
          <h2 className={styles.question}>{poll?.title}</h2>
          <ul className={styles.options}>
            {poll?.options?.map(option => (
              <li key={option.id}>
                <input type="radio" name="comida" value="Lasanha" onClick={() => handleSelect(option.id)} />
                <label>{option.text}</label>
              </li>
            ))}
            
          </ul>
          <button disabled={!isChecked} onClick={handleVote} className={styles.submit}>Enviar</button>
        </div>
      );
}


