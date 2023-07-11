import styles from './Poll.module.css';
import { useState, useEffect} from 'react'
import api from '../api/index'

export function Poll(){

  const [isChecked, setIsChecked] = useState()
  const [selectOption, setSelectOption] = useState()
  const [poll, setPoll] = useState()
  const [totalVotes, setTotalVotes] = useState(0)
  const [isVote, setIsVote] = useState(false)

  async function getInfo() {
    const resp = await api.get('/poll')
    setPoll(resp.data)
  }

  useEffect(() => {
    getInfo()
  }, [])

  useEffect(() => {
    handleCountVotes();
  }, [poll]);

    async function handleVote(){
      setIsChecked(true)
      await api.post('/poll/vote', {
        option_id: selectOption,
        menu_id: poll.id
      }).then(() => {
        setIsVote(true)
        alert("Seu voto foi computado!")
      })
      getInfo()
    }
    
    function handleCountVotes() {
      if (poll && poll.options) {
        let votes = 0;
        poll.options.forEach((item) => {
          votes += item.votes;
        });
        setTotalVotes(votes);
      }
    }

    function handleSelect(id) {
      setIsChecked(true)
      setSelectOption(id)
    }
    
    return (
        <div className={styles.container}>
          {isVote ? (
            <>
              <h2 className={styles.question}>{poll?.title}</h2>
              {poll?.options?.map(option => (
                  <div className={styles.results}key={option.id}>
                    <label>{option.text}</label>
                    <span>{((option.votes/totalVotes) * 100).toFixed(2)}%</span>
                  </div>
                ))}
            </>
          ) : 
          (
            <>
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
            </>
        )}
        </div>
      );
}


