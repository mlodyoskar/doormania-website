import React from 'react'
import styles from './Layout.module.scss'
import Footer from '@/components/Footer/Footer'

const Layout = ({ children, data }) => (
  <>
    <main className={styles.layout}>{children}</main>
    <Footer data={data} />
  </>
)

export default Layout
