import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react'
import { ThumbsUp } from 'phosphor-react'

import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'

export function Post({ author, publishedAt, quantityLikes, content, comments, onDelete, onCreate, onLiked }){
    const [newCommentText, setNewCommentText] = useState('');

    const publishedDateFormatted = format(new Date(publishedAt), "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    });

    const publishedDateRelativeToNow = formatDistanceToNow(new Date(publishedAt), {
        locale: ptBR,
        addSuffix: true
    })

    function handleCreateComment() {
        onCreate(newCommentText, author.post_id)
    }

    async function deleteComment(comment_id){
        onDelete(comment_id)
    }

    async function handleLikePost(){
        onLiked(author.post_id)
    }

    const isNewCommentEmpty = newCommentText.length === 0;

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                <p>{content}</p>
            </div>

            <form onSubmit={handleCreateComment} className={styles.commentForm}>
                <span onClick={handleLikePost}>
                    <ThumbsUp />
                    Aplaudir <span>{quantityLikes}</span>
                </span>

                <strong>Deixe seu Feedback</strong>

                <textarea 
                    name='comment'
                    placeholder='Deixe um comentário'
                    value={newCommentText}
                    onChange={(e) => setNewCommentText(e.target.value)}
                    required
                />
                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>
                        Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment 
                            key={comment.id}
                            comment={comment}
                            onDeleteComment={deleteComment}
                            isAdmin={author.role}
                        />
                    )
                })}
            </div>
        </article>
    )
}