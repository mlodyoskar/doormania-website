import Image from 'next/image'
import styles from './Product.module.scss'
import cn from 'classnames'

const Product = ({ product: { name, description, category, image } }) => {
  return (
    <section className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={image.url} width={300} height={450} />
      </div>
      <p className={styles.doorTitle}>{name}</p>
      <p className={styles.doorDescription}>{description}</p>
      <span className={styles.horizontalLine}></span>
      <p>Dostępne wersje: </p>
    </section>
  )
}

export default Product
