import { useState } from 'react'
import { useRouter } from 'next/router'
import { Link, animateScroll as scroll } from 'react-scroll'
import { AiFillHome, AiOutlineMenu } from 'react-icons/ai'

function Header() {

  //State
  const [active, setActive] = useState(false)
  const router = useRouter()

  const MenuToggle = () => {
    setActive(!active)
  }

  return (
    <>
      <header className="z-10 mx-2">
        <nav className={`flex flex-wrap
          ${active ? "" : "border-b"}
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          text-lg text-700
        `}>
          <div>
            <a href="#">
              <AiFillHome onClick={() => router.push('/')} className="cursor-pointer float-left inline-block" />
            </a>
          </div>
          <a href="#" onClick={MenuToggle}>
            <AiOutlineMenu className={`float-right h-6 w-6 cursor-pointer md:hidden block`} />
          </a>
          <div className={`${active ? "block" : "hidden"} w-full md:flex md:items-center md:w-auto`}>
            <ul className={`${active ? "divide-y-2" : ""} text-base pt-4 md:flex md:place-content-end md:pt-0`}>
              {
                ["about", "portfolio", "blog", "contact"]
                  .map((to, index) => <li key={index}><Link className="cursor-pointer transition-all duration-500 ease-in-out py-2 block md: p-4 hover:text-lg" activeClass="active" to={to}>{to.charAt(0).toUpperCase() + to.substring(1)}</Link></li>)
              }
            </ul>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
