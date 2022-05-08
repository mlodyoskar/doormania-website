import styles from './NavigationItem.module.scss'
import Link from 'next/link'

const NavigationItem = ({ path, text, closeNavbar }) => {
  return (
    <li onClick={closeNavbar} className={styles.menuListItem}>
      <Link href={path}>
        <a>{text}</a>
      </Link>
    </li>
  )
}

export { NavigationItem }
