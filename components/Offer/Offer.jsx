import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { StyledLink } from '../StyledLink/StyledLink'
import styles from './Offer.module.scss'
import cn from 'classnames'

const Offer = ({ allDoors }) => {
  const categoires = [
    { name: 'Drzwi wejściowe do mieszkania', path: '/oferta' },
    { name: 'Drzwi wejściowe do domu', path: '/oferta' },
    { name: 'Drzwi wewnętrzne', path: '/oferta' },
  ]
  const [categoriesVisiblity, setCategoriesVisiblity] = useState(false)
  const toggleCategoiresVisibility = () =>
    setCategoriesVisiblity((prevVal) => !prevVal)

  return (
    <section className={styles.container}>
      <h1 className={styles.pageHeader}>Wszystkie drzwi</h1>
      <div className={styles.content}>
        <div className={styles.categoryContainer}>
          <button onClick={toggleCategoiresVisibility}>Pokaż Kategorie</button>
          <div
            className={cn(styles.categories, {
              [styles.active]: categoriesVisiblity,
            })}
          >
            {categoires.map(({ name, path }) => (
              <Link href={`${path}`}>
                <a>{name}</a>
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.doorsContainer}>
          {allDoors.map(({ id, name, image }) => (
            <div key={id} className={styles.doorCard}>
              <Image width={150} height={200} src={image.url} />
              <p>{name}</p>
              <StyledLink variant="secondary" path={`oferta/${name}`}>
                Sprawdź
              </StyledLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Offer
