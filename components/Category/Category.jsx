import React, { useState } from 'react'
import styles from './Category.module.scss'
import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'

const categories = [
  { name: 'Wszystkie', path: 'wszystkie' },
  { name: 'Drzwi wejściowe do mieszkania', path: 'wejsciowe-do-mieszkania' },
  { name: 'Drzwi wejściowe do domu', path: 'wejsciowe-do-domu' },
  { name: 'Drzwi wewnętrzne', path: 'wewnetrzne' },
]

const Category = () => {
  const { query } = useRouter()
  const [categoriesVisiblity, setCategoriesVisiblity] = useState(false)

  const toggleCategoriesVisibility = () =>
    setCategoriesVisiblity((prevVal) => !prevVal)

  return (
    <div className={styles.categoryContainer}>
      <button onClick={toggleCategoriesVisibility}>Pokaż Kategorie</button>
      <div
        className={cn(styles.categories, {
          [styles.active]: categoriesVisiblity,
        })}
      >
        {categories.map(({ name, path }) => (
          <Link key={name} href={`/oferta/${path}`}>
            <a
              className={cn({ [styles.active]: path == query.slug })}
              onClick={toggleCategoriesVisibility}
            >
              {name}
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}

export { Category }
