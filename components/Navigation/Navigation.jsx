import { useState } from 'react'
import styles from './Navigation.module.scss'
import Link from 'next/link'
import cn from 'classnames'
import { NavigationItem } from './NavigationItem/NavigationItem'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const closeNavbar = () => setIsOpen(false)

  return (
    <nav className={styles.navigation}>
      <h1>Doormania</h1>
      <button
        className={styles.hamburgerButton}
        aria-controls="navigation"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
      >
        <span
          className={cn(styles.hamburger, {
            [`${styles.hamburger}-active`]: isOpen,
          })}
        ></span>
      </button>
      <div
        className={cn(styles.menuList, {
          [`${styles.menuList}-active`]: isOpen,
        })}
      >
        <ul>
          <NavigationItem closeNavbar={closeNavbar} link="/">
            Strona główna
          </NavigationItem>
          <NavigationItem closeNavbar={closeNavbar} link="/about">
            O nas
          </NavigationItem>
          <NavigationItem closeNavbar={closeNavbar} link="/offer">
            Oferta
          </NavigationItem>
          <NavigationItem closeNavbar={closeNavbar} link="/offer">
            Kontakt
          </NavigationItem>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
