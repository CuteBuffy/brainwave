import react from 'react'


export default function Nav() {

  const [open, setOpen] = react.useState(false);

  const handleClick = () => {
    if (!open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }

  return (
    <>
      <header className="page__container">
        <nav className="navbar">
          <div className="container navbar__container">
            <div className="navbar__left">
              <a className="navbar__logo" href="">Brainwave.io</a>
              <ul className="navbar__links">
                <li><a href="#services">demos</a></li>
                <li><a href="#story">pages</a></li>
                <li><a href="#work">support</a></li>
                <li><a href="#testimonial">contact</a></li>
              </ul>
            </div>
            <button className="btn">Get started a project</button>
            <button onClick={handleClick} className="navbar__burger-menu">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path fill-rule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
          <div style={open ? {left: "0"} : {left: "-100%"}} className="navbar__mobile-menu">
            <div className="navbar__mobile-links-cont">
              <ul className='navbar__mobile-links'>
                <li><a href="#services">demos</a></li>
                <li><a href="#story">pages</a></li>
                <li><a href="#work">support</a></li>
                <li><a href="#testimonial">contact</a></li>
              </ul>
              <button className='btn'>Get started a project</button>
            </div>
          </div>
        </nav>
        
        <div className="container hero__container">
          <div className="wrapper">
            <div className="hero__content">
              <div className="hero__text-content">
                <p className="hero__upper_desc">let's shift your business</p>
                <h1 className="hero__title">Shift your business fast with Shade Pro.</h1>
                <p className="hero__description">With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes.</p>
                <button className="btn">Get started a project</button>
              </div>
              <div className="hero__img-content">
                <img src="./imgs/Image.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}