import styles from './NavigationItem.module.scss'
import Link from 'next/link'

const NavigationItem = ({ children, link, closeNavbar }) => {
  return (
    <li onClick={closeNavbar} className={styles.menuListItem}>
      <Link href={link}>
        <a>{children}</a>
      </Link>
    </li>
  )
}

export { NavigationItem }
