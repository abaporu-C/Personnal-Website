import styles from '../styles/Home.module.css'
import Image from 'next/image'

type AppProps = {
    id: number,
    date: Date,
    title: string,
    content: string,
    author: string,
    image: string
}

export default function Card({id, date, title, content, author, image}: AppProps): JSX.Element{    
    return(
        <>
            <article className={styles.card}>
                <header>
                    <h2 className={styles.cardTitle}>{title}</h2>
                    <p className={styles.date}>Posted on: {`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}</p>                    
                </header>
                <Image className={styles.cardImage} src={image} width="100%" height="160%" alt="Blog Post Snippet"/>
                <p className={styles.cardContent}>{content}</p>
                <p>By {author}</p>
            </article>
        </>
    )
}