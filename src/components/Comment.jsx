import styles from './Comment.module.css'

import { Trash, ThumbsUp } from 'phosphor-react'
import { Avatar } from './Avatar'
import { useState } from 'react';

export function Comment({ content, onDeleteComment }){
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment(){
        onDeleteComment(content);
    }

    function handleLikeComment(){
        setLikeCount((state) => {
            return state + 1;
        }); 
    }

    return (
        <div className={styles.comment}>
            <Avatar src="https://github.com/viniciusmoreira04.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Vinicius Moreira</strong>
                            <time title='11 de Maio às 08:13' dateTime='2022-05-11 08:13:30'>Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>

        </div>
    )
}