import { useState } from 'react'
import styles from './Navigation.module.scss'
import Link from 'next/link'
import cn from 'classnames'
import { NavigationItem } from './NavigationItem/NavigationItem'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const closeNavbar = () => setIsOpen(false)

  const navigationItems = [
    { path: '/', text: 'Strona główna' },
    { path: '/oferta', text: 'Oferta' },
    { path: '/o-nas', text: 'O nas' },
    { path: 'kontakt', text: 'Kontakt' },
  ]

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
