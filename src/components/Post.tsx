import styles from './Post.module.css'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

interface Author {
name: string;
role: string;
avatarUrl: string;
}

interface Content {
type: "paragraph" | "link";
content: string;
}

export interface PostProps {
author: Author;
publishedAt: Date;
content: Content[];
}

export const Post = ({author, publishedAt, content}:PostProps) => {

    const [comments, setComments] = useState([
        'Post muito bacana, hein!?'
    ])

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormmated = format(publishedAt, "dd 'de' LLLL 'ás' HH':'mm'h'", {
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale:ptBR,
        addSuffix:true,
    })

    function handleCreateNewComment(event: FormEvent){

        event.preventDefault()
        setComments([...comments, newCommentText])

        setNewCommentText('')
    }

    function handlerNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
        
    }

    function handlerNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
       
        event.target.setCustomValidity('Esse campo é obrigattório') // setCustomValidity fornece a opção de escrever algo no código de erro required
        setNewCommentText(event.target.value)
    }

    function deleteComment(commentToDelete: string){
        const commentsWithoutDeleteOne = comments.filter(comment =>{
            return comment !== commentToDelete
        })
        setComments(commentsWithoutDeleteOne)
    }

    const isNewCommentEmpty = newCommentText.length === 0

  return (
    <article className={styles.post}>
        <header>
            <div className={styles.author}>
                <Avatar src={author.avatarUrl} />
                <div className={styles.authorInfo}>
                    <strong>{author.name}</strong>
                    <span>{author.role}</span>
                </div>
            </div>
            <time title={publishedDateFormmated} dateTime={publishedAt.toISOString()}>
                {publishedDateRelativeToNow}
            </time>
        </header>
        <div className={styles.content}>
            {content.map((line)=>{
                if(line.type ==='paragraph'){
                    return <p key={line.content}>{line.content}</p>
                } else if(line.type === 'link'){
                    return <p key={line.content}><a href='#'>{line.content}</a></p> 
                }
            }
            )}
        </div>

        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
            <strong>Deixe seu comentário</strong>
            <textarea
                name='comment'
                placeholder='Deixe um comentário'
                onChange={handlerNewCommentChange}
                value={newCommentText}
                onInvalid={handlerNewCommentInvalid} // Chamada sempre que o 
                required
            />
            <footer>
                <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
            </footer>
        </form>
        <div className={styles.commentList}>
            {comments.map((comment)=>(
                <Comment
                    key={comment}
                    comment={comment}
                    onDeleteComment={deleteComment}
                />
            ))}
        </div>
    </article>
  )
}
