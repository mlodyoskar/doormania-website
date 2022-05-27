import { useState } from 'react'
import styles from './Navigation.module.scss'
import Link from 'next/link'
import Logo from '../Logo/Logo'
import cn from 'classnames'
import { NavigationItem } from './NavigationItem/NavigationItem'

const navigationItems = [
  { path: '/', text: 'Strona główna' },
  { path: '/oferta/wszystkie', text: 'Oferta' },
  { path: '/o-nas', text: 'O nas' },
  { path: '/kontakt', text: 'Kontakt' },
]

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const closeNavbar = () => setIsOpen(false)

  return (
    <nav className={styles.navigation}>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <button
        className={styles.hamburgerButton}
        aria-controls="navigation"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
      >
        <span
          className={cn(styles.hamburger, {
            [styles.active]: isOpen,
          })}
        ></span>
      </button>
      <div
        className={cn(styles.menuList, {
          [styles.active]: isOpen,
        })}
      >
        <ul>
          {navigationItems.map(({ path, text }) => (
            <NavigationItem
              path={path}
              text={text}
              key={text}
              closeNavbar={closeNavbar}
            />
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
