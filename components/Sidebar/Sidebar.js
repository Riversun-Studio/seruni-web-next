import React from 'react'
import styles from './Sidebar.module.scss'
import { Link } from "react-scroll"
import { HiX } from 'react-icons/hi'

const Sidebar = ({closeSidebar, isSidebarOpen}) => {
  return (
    <section className={isSidebarOpen ? `${styles.sidebar} ${styles.open}` : styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <button name="close-sidebar" title="close-sidebar">
          <HiX className={styles.closeIcon} onClick={closeSidebar}/>
        </button>
      </div>
      <nav className={styles.sidebarLink}>
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onClick={closeSidebar}
          name="sidebar-home"
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
          onClick={closeSidebar}
          name="sidebar-about-us"
        >
          About Us
        </Link>
        <Link
          activeClass="active"
          to="our-work"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onClick={closeSidebar}
          name="sidebar-our-work"
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
          onClick={closeSidebar}
          name="sidebar-contact-us"
        >
          Contact Us
        </Link>
      </nav>
    </section>
  )
}

export default Sidebar
