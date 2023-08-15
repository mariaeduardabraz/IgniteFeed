import styles from './Post.module.css'

export function Post () {
    return (
        <article className={styles.post}>
            <div className={styles.author}></div>
        </article>
    )
}