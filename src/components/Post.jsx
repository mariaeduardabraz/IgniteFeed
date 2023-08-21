import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post () {
    return (
        <article className={styles.post}>
            <header className={styles.header}>
                <div className={styles.author}>
                    <Avatar src="https://github.com/CAIOZIn1.png"/>
                    <div className={styles.authorInfo}>
                        <strong>Maria Eduarda</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title='2022-05-11 às 08:00' dateTime='2022-05-11 08:00'>Publicado há 1h</time> {/* title aparece qd deixa o mouse em cima e datetime no inspecionar */}
            </header>
            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. 
                O nome do projeto é DoctorCare 🚀</p>
                <a href='https://github.com/mariaeduardabraz.png'>👉 https://github.com/mariaeduardabraz.png</a>
                <p>👉 <a href=""> #irrul</a></p>
            </div>
            <form className={styles.commentForm}>
                <textarea placeholder="Deixe seu comentário"/>
                <footer>
                    <button type='submit'>Comentar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
        
    )
}