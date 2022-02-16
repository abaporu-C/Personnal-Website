import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  return (
    <main>
    <div className={styles.homeTitle}>
      <div className={styles.homeTitleWrapper}>
        <h1>I&#39;m a</h1>
        <ul>
          <li><span>Developer</span></li>
          <li><span>Designer</span></li>
          <li><span>Freelancer</span></li>
        </ul>
      </div>
    </div>
     <div className={styles.homeGrid}>
       <section>
        <div>          
          <h2 className={styles.sectionTitle}>About me:</h2>
          <p className={styles.sectionParagraph}>Vinicius is a freelance full-stack developer based in Ontario with a passion for building safe and efficient
             digital solutions. He thrives with the demands of every new project and overcomes the rising challenges with
             technical proficiency and creativity. When not online, he loves street running and gathering with friends.
             Currently, he is finishing his Software development studies in Niagara College and is working as a Freelance Developer. 
          </p>
        </div>
        <div>
          <h2 className={styles.sectionTitle}>What I &#10084;:</h2>
          <p className={styles.sectionParagraph}>Literature, Music, Hacking, Reverse Engineering and A&W&#39;s Root Beer &#127866;</p> 
        </div>
        <div>
          <h2 className={styles.sectionTitle}>Find Me On:</h2>
          <ul className={styles.sectionList}>
            <li>
              <a style={{display: "flex"}} href="https://github.com/abaporu-C" target="_blank" rel="noreferrer">
                  <svg width="8vw" height="8vh" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="48" height="48" fill="white" fillOpacity="0.01"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4ZM0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z" fill="currentColor"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M19.183 45.4715C18.9896 45.2218 18.9896 42.9972 19.183 38.798C17.1112 38.8695 15.8022 38.7257 15.256 38.3666C14.4368 37.8279 13.6166 36.1666 12.8889 34.9958C12.1612 33.825 10.546 33.6399 9.8938 33.3782C9.24158 33.1164 9.07785 32.0495 11.691 32.8564C14.3042 33.6633 14.4316 35.8606 15.256 36.3744C16.0804 36.8882 18.0512 36.6634 18.9446 36.2518C19.8379 35.8402 19.7722 34.3077 19.9315 33.7006C20.1329 33.1339 19.423 33.0082 19.4074 33.0036C18.5353 33.0036 13.9537 32.0072 12.6952 27.5705C11.4368 23.1339 13.0579 20.234 13.9227 18.9874C14.4992 18.1563 14.4482 16.3851 13.7697 13.6736C16.2333 13.3588 18.1344 14.1342 19.4732 16C19.4745 16.0107 21.2283 14.9571 24 14.9571C26.7718 14.9571 27.7551 15.8153 28.514 16C29.2728 16.1847 29.8798 12.734 34.5666 13.6736C33.5881 15.5968 32.7686 18 33.3941 18.9874C34.0195 19.9748 36.4742 23.1146 34.9664 27.5705C33.9611 30.5412 31.9851 32.3522 29.0382 33.0036C28.7002 33.1114 28.5313 33.2854 28.5313 33.5254C28.5313 33.8855 28.9881 33.9248 29.6463 35.6116C30.085 36.7361 30.1167 39.9479 29.7413 45.2469C28.7904 45.489 28.0506 45.6515 27.5219 45.7346C26.5845 45.8819 25.5667 45.9645 24.5666 45.9964C23.5666 46.0283 23.2193 46.0247 21.8368 45.896C20.9151 45.8102 20.0305 45.6687 19.183 45.4715Z" fill="currentColor"/>                    
                  </svg>
                  <p style={{display: "inline-block", marginLeft: "5vw", fontSize: "large", fontWeight: 800}}>@abaporu-C</p>
              </a>
            </li>
            <li>
              <a style={{display: "flex"}} href="https://twitter.com/_vinny_dev" target="_blank" rel="noreferrer">
                <span>
                  <svg width="8vw" height="8vh" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23 3.01006C23 3.01006 20.9821 4.20217 19.86 4.54006C19.2577 3.84757 18.4573 3.35675 17.567 3.13398C16.6767 2.91122 15.7395 2.96725 14.8821 3.29451C14.0247 3.62177 13.2884 4.20446 12.773 4.96377C12.2575 5.72309 11.9877 6.62239 12 7.54006V8.54006C10.2426 8.58562 8.50127 8.19587 6.93101 7.4055C5.36074 6.61513 4.01032 5.44869 3 4.01006C3 4.01006 -1 13.0101 8 17.0101C5.94053 18.408 3.48716 19.109 1 19.0101C10 24.0101 21 19.0101 21 7.51006C20.9991 7.23151 20.9723 6.95365 20.92 6.68006C21.9406 5.67355 23 3.01006 23 3.01006Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <p style={{display: "inline-block", marginLeft: "5vw", fontSize: "large", fontWeight: 800}}>@_vinny_dev</p>
              </a>
            </li>
            <li>
              <a style={{display: "flex"}} href="https://www.instagram.com/abaporu_c/" target="_blank" rel="noreferrer">
                <span>
                  <svg width="9vw" height="9vh" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path fill="none" d="M0 0h24v24H0z"/>
                      <path fill="currentColor" fillRule="nonzero" d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.25a1.25 1.25 0 0 1-2.5 0 1.25 1.25 0 0 1 2.5 0zM12 4c-2.474 0-2.878.007-4.029.058-.784.037-1.31.142-1.798.332-.434.168-.747.369-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.006 9.075 4 9.461 4 12c0 2.474.007 2.878.058 4.029.037.783.142 1.31.331 1.797.17.435.37.748.702 1.08.337.336.65.537 1.08.703.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.474 0 2.878-.007 4.029-.058.782-.037 1.309-.142 1.797-.331.433-.169.748-.37 1.08-.702.337-.337.538-.65.704-1.08.19-.493.296-1.02.332-1.8.052-1.104.058-1.49.058-4.029 0-2.474-.007-2.878-.058-4.029-.037-.782-.142-1.31-.332-1.798a2.911 2.911 0 0 0-.703-1.08 2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.925 4.006 14.539 4 12 4zm0-2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2z"/>
                    </g>
                  </svg>
                </span>
                <p style={{display: "inline-block", marginLeft: "5vw", fontSize: "large", fontWeight: 800}}>@_vinny_dev</p>
              </a>
            </li>
          </ul>
        </div>
       </section>
       <section className={styles["post-section"]}>

       </section>
       <section className={styles["proj-section"]}>

       </section>
     </div> 
    </main>
  )
}

export default Home
