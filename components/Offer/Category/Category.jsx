import React, { useEffect, useState } from 'react'
import styles from './Category.module.scss'
import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useWindowSize } from '@/hooks/useWindowSize'

const categories = [
  { name: 'Wszystkie', path: 'wszystkie' },
  { name: 'Drzwi wejściowe do mieszkania', path: 'wejsciowe-do-mieszkania' },
  { name: 'Drzwi wejściowe do domu', path: 'wejsciowe-do-domu' },
  { name: 'Drzwi wewnętrzne', path: 'wewnetrzne' },
]

const breakpoint = 1024

const Category = () => {
  const { query } = useRouter()
  const { width } = useWindowSize()
  const [categoriesVisiblity, setCategoriesVisiblity] = useState(false)

  useEffect(() => {
    setCategoriesVisiblity(width >= 1024)
  }, [width])

  const toggleCategoriesVisibility = () =>
    setCategoriesVisiblity((prevVal) => !prevVal)

  return (
    <nav className={styles.container}>
      {width < breakpoint ? (
        <button onClick={toggleCategoriesVisibility}>Pokaż Kategorie</button>
      ) : (
        <p>Kategorie</p>
      )}
      <div
        className={cn(styles.categories, {
          [styles.active]: categoriesVisiblity,
        })}
      >
        {categories.map(({ name, path }) => (
          <Link key={name} href={`/oferta/${path}`}>
            {width <= breakpoint ? (
              <a
                className={cn({ [styles.active]: path == query.slug })}
                onClick={toggleCategoriesVisibility}
              >
                {name}
              </a>
            ) : (
              <a className={cn({ [styles.active]: path == query.slug })}>
                {name}
              </a>
            )}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export { Category }
