import Link from 'next/link'
import styles from './StyledLink.module.scss'
import cn from 'classnames'

const variantToClass = {
  primary: styles.primary,
  secondary: styles.secondary,
}

const StyledLink = ({ children, path, variant = 'primary' }) => {
  return (
    <Link href={path}>
      <a className={cn(styles.button, variantToClass[variant])}>{children}</a>
    </Link>
  )
}

export { StyledLink }
