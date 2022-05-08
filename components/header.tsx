import { Link, animateScroll as scroll } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faBars } from '@fortawesome/free-solid-svg-icons'

function Header() {

  return (
    <>
      <header>
        <nav>
          <FontAwesomeIcon icon={faHouse} />
          <ul>
            <li><Link activeClass="active" to="About">About</Link></li>
            <li><Link activeClass="active" to="portfolio">Portifolio</Link></li>
            <li><Link activeClass="active" to="blog">Blog</Link></li>
            <li><Link activeClass="active" to="contact">Contact</Link></li>
          </ul>
          <FontAwesomeIcon icon={faBars} border />
        </nav>
      </header>
    </>
  )
}

export default Header
