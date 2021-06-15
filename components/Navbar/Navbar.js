import React, { useRef, useEffect } from 'react'
import styles from './Navbar.module.scss'
import { Link } from "react-scroll"
import { HiMenu } from "react-icons/hi"

const Navbar = ({ toggleSidebar }) => {

  const beforePosition = useRef(0)
  const navbarRef = useRef()

  useEffect(() => {
    window.addEventListener('scroll', () => handleUserScroll())
    return () => {
      window.removeEventListener('scroll', () => handleUserScroll())
    }
  }, [])

  const handleUserScroll = () => {
    if (window.scrollY === 0) {
      navbarRef.current.classList.remove('scrolled')
      navbarRef.current.classList.remove('show')
    }
    else if ((document.body.getBoundingClientRect()).top > beforePosition.current) {
      navbarRef.current.classList.add(`show`)
      navbarRef.current.classList.remove('scrolled')
    }
    else {
      navbarRef.current.classList.remove('show')
      navbarRef.current.classList.add('scrolled')
    }
    beforePosition.current = (document.body.getBoundingClientRect()).top
  }
  return (
    <header className={styles.navbar} ref={navbarRef}>

      {/* Dekstop Navbar */}
      <nav className={styles.navDesktop}>
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          name="home"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="our-services"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          name="about-us"
        >
          About Us
        </Link>
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          name="seruni-logo"
        >
          <img src="/img/logo_seruni.png" alt="Seruni Logo"/>
        </Link>
        <Link
          activeClass="active"
          to="our-work"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          name="our-work"
        >
          Our Work
        </Link>
        <Link
          activeClass="active"
          to="contact-us"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          name="contact-us"
        >
          Contact Us
        </Link>
      </nav>

      {/* Mobile Navbar */}
      <nav className={styles.navMobile}>
        <div className={styles.hamburgerMenu} >
          <button name="hamburger-menu" title="hamburger-menu">
            <HiMenu onClick={toggleSidebar} />
          </button>
        </div>
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          name="seruni-logo-mobile"
        >
          <img src="/img/logo_seruni.png" alt="Seruni Logo" />
        </Link>
      </nav>
    </header>
  )
}

export default Navbar
