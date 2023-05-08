import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

interface CommentProps{
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {

    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        console.log('deletar')
        onDeleteComment(content);
    }

    function handleLikeComment(){
        
        setLikeCount((state) => {
            return state + 1
            
        });        
    }


    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src='https://avatars.githubusercontent.com/u/2254731?v=4' alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego Fernandes</strong>
                            <time title='04 de maio as 18:48' dateTime='2022-05-11 08:13:30'>Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar Comentário'>
                            <Trash size="24" />
                        </button>

                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir
                        <span>{likeCount}</span>
                    </button>

                </footer>
            </div>
        </div>
    )
}