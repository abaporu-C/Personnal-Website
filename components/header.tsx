function Header() {

  function menuToggle() {
    document.body.classList.remove('active')
  }

  return (
    <>
      <header>
        <div className="pie pie1" onClick={menuToggle}>
          <p>Header Here</p>
        </div>
      </header>
    </>
  )
}

export default Header
