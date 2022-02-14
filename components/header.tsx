import Link from 'next/link';
import Head from 'next/head'
import styles from '../styles/Home.module.css'

//Header Component
const Header = (): JSX.Element  => {
    return (
        <>
        <Head>
        <title>Vinny&#39;s Blog</title>
        <meta name="description" content="Vinicius Pereira Portfolio" />
        <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0"></meta>
        <link rel="icon" href="/favicon.ico" />        
      </Head>   
        <header className={styles.header}>
            <nav className={styles.header_nav}>
                <ul>
                    <li><Link href="/">Vinny&#39;s Page</Link></li>
                    <li className={styles.nav_li}><Link href="blog">Blog</Link></li>
                    <li className={styles.nav_li}><Link href="projects">Projects</Link></li> 
                    <li className={styles.nav_li}><Link href="/">Home</Link></li>                                                           
                </ul>                
            </nav>
        </header>
        </>
    )
} 

export default Header;