import Image from 'next/image'
import Link from 'next/link'
import { StyledLink } from '../StyledLink/StyledLink'
import styles from './Product.module.scss'
import cn from 'classnames'

const Product = ({ product: { id, name, category } }) => {
  return (
    <section className={styles.container}>
      <h1 className={styles.pageHeader}>{name}</h1>
      <div className={styles.content}></div>
    </section>
  )
}

export default Product
