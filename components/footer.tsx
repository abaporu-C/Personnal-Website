import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function Footer(): JSX.Element{
    return(
        <footer>                    
            <div className={styles.footerContainer}>
            <hr />                
                <div className={styles.footerNav}>                    
                    <ul>                    
                        <li><Link href="blog">Blog</Link></li>
                        <li><Link href="projects">Projects</Link></li> 
                        <li><Link href="/">Home</Link></li>                                                           
                    </ul>                
                </div>
            </div>            
        </footer>
    )
}