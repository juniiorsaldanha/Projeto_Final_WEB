import styles from './Comment.module.css'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Trash, ThumbsUp } from 'phosphor-react'
import { Avatar } from './Avatar'
import { useState } from 'react';

export function Comment({ comment, onDeleteComment }){
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment(){
        onDeleteComment(comment.id);
    }

    function handleLikeComment(){
        setLikeCount((state) => {
            return state + 1;
        }); 
        // falta o like
    }

    const publishedDateFormatted = format(new Date(comment.created_at), "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    });

    const publishedDateRelativeToNow = formatDistanceToNow(new Date(comment.created_at), {
        locale: ptBR,
        addSuffix: true
    })

    return (
        <div className={styles.comment}>
            <Avatar src={comment.user.urlAvatar} />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>{comment.user.name}</strong>
                            <time title={publishedDateFormatted} dateTime={comment.created_at}>{publishedDateRelativeToNow}</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{comment.content}</p>
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