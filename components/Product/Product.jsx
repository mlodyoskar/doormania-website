import Image from 'next/image'
import styles from './Product.module.scss'
import cn from 'classnames'

const Product = ({
  product: { name, description, category, image, version },
}) => {
  return (
    <section className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={image.url} width={300} height={450} />
      </div>
      <p className={styles.doorTitle}>{name}</p>
      <p className={styles.doorDescription}>{description}</p>
      <span className={styles.horizontalLine}></span>
      {version.length != 0 && (
        <p className={styles.availability}>Dostępne wersje: </p>
      )}
      <div className={styles.versionContainer}>
        {version.map(({ name, thickness, rw, ud }) => (
          <div className={styles.version}>
            <p>{name}</p>
            <ul>
              <li>{thickness}</li>
              <li>{rw}</li>
              <li>{ud}</li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Product
