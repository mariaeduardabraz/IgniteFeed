import styles from './Post.module.css'

export function Post () {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src='https://github.com/mariaeduardabraz.png'/>
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
                <p>👉 #irrul</p>
            </div>
        </article>
    )
}