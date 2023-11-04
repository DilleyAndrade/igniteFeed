import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'

interface CommentsProps{
  comment:string;
  onDeleteComment: (comment:string) => void;
}

export const Comment = ({comment, onDeleteComment}:CommentsProps) => {

  const [likeCount, setLikeCount] = useState(0)

  function handlDeleteComment(){
    onDeleteComment(comment)
  }

  return (
    <div className={styles.comment}>

      <Avatar 
        hasBorder={false} 
        src="https://github.com/dilleyandrade.png" 
        alt=''
        
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Dilley Andrade</strong>
              <time title='11 de Maio as 08:13h' dateTime='2022-05-11 08:13:30'>Cerca de 1h atrás</time>

            </div>
            <button onClick={handlDeleteComment} title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>
          <p>{comment}</p>
        </div>
        <footer>
          <button onClick={() => setLikeCount(likeCount + 1)}>
            <ThumbsUp size={24} />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
