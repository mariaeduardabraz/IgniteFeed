import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment () {
    return (
        <div className={styles.comment}>
            <img src='https://github.com/mariaeduardabraz.png' /> 
            <div className={styles.commentBox}> 
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Autor do comentário</strong>
                            <time title='2022-05-11 às 08:00' dateTime='2022-05-11 08:00'>Cerca de 1h atrás</time>
                            <button title='delete'><Trash size={20}/></button>
                        </div>
                        
                    </header>
                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}