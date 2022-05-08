import { useRouter } from 'next/router'
import { Link, animateScroll as scroll } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faBars } from '@fortawesome/free-solid-svg-icons'

function Header() {

  const router = useRouter()

  return (
    <>
      <header>
        <nav className="text-base">
          <FontAwesomeIcon onClick={() => router.push('/')} icon={faHouse} className="float-left inline-block" />
          <FontAwesomeIcon icon={faBars} border className="float-right h-6 w-6 cursor-pointer md:hidden block" />
          <ul className="pt-4 md:flex md:place-content-end md:pt-0">
            {
              ["about", "portfolio", "blog", "contact"]
                .map((to, index) => <li key={index}><Link className="transition-all duration-500 ease-in-out py-2 block md: p-4 hover:text-lg" activeClass="active" to={to}>{to.charAt(0).toUpperCase() + to.substring(1)}</Link></li>)
            }
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
