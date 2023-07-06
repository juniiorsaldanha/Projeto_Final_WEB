import styles from './Comment.module.css'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Trash } from 'phosphor-react'
import { Avatar } from './Avatar'

export function Comment({ isAdmin, comment, onDeleteComment }){
    function handleDeleteComment(){
        const user = JSON.parse(localStorage.getItem('userDATA'))
        if (user.admin){
            onDeleteComment(comment.id);
        }
        else
            alert("Somente administrador podem deletar mensagens!")
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
                            <strong>{comment.user.username}</strong>
                            <time title={publishedDateFormatted} dateTime={comment.created_at}>{publishedDateRelativeToNow}</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{comment.content}</p>
                </div>

            </div>

        </div>
    )
}