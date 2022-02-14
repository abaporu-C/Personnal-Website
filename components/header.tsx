import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Home.module.css';

//Custom Types
type FlexToggle = 'none' | 'flex';

//Header Component
const Header = (): JSX.Element  => {
    const [flexToggle, setFlexToggle] = useState<FlexToggle>('none');   

    function menuToggle(){
        if(flexToggle === 'none') return setFlexToggle(() => 'flex');
        return setFlexToggle(() => 'none');
    }    

    return (
        <>
            <Head>
                <title>Vinny&#39;s Blog</title>
                <meta name="description" content="Vinicius Pereira Portfolio" />
                <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />        
            </Head>   
            <header className={styles.header}>
                <nav className={styles.headerNav}>
                    <Link href="/" passHref>                
                        <svg style={{margin: "1vh"}} width="12vw" height="7vh" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" className={styles.navIcon}>
                            <path d="M516 673c0 4.4 3.4 8 7.5 8h185c4.1 0 7.5-3.6 7.5-8v-48c0-4.4-3.4-8-7.5-8h-185c-4.1 0-7.5 3.6-7.5 8v48zm-194.9 6.1l192-161c3.8-3.2 3.8-9.1 0-12.3l-192-160.9A7.95 7.95 0 0 0 308 351v62.7c0 2.4 1 4.6 2.9 6.1L420.7 512l-109.8 92.2a8.1 8.1 0 0 0-2.9 6.1V673c0 6.8 7.9 10.5 13.1 6.1zM880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"/>                            
                        </svg>                                                
                    </Link>                                    
                    <button onClick={menuToggle} className={styles.menuButton}>
                        <svg width="5vw" height="5vh" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path fill="none" d="M0 0h24v24H0z"/>
                                <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"/>
                            </g>
                        </svg>
                    </button>
                    <div className={styles.navContainer} style={{display: flexToggle}}>
                        <Link href="/blog" passHref><span className={styles.navItem}>Blog</span></Link>
                        <Link href="/work" passHref><span className={styles.navItem}>Work</span></Link>
                        <a href="https://github.com/abaporu-C/Personnal-Website" className={styles.navItem} target="_blank" rel="noreferrer">Source</a>
                        <Link href="/" passHref><span className={styles.navItem}>About</span></Link>
                    </div>                
                </nav>
            </header>
        </>
    )
} 

export default Header;