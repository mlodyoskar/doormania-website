import React from 'react'
import styles from './Layout.module.scss'
import Footer from '@/components/Footer/Footer'
import Navigation from '@/components/Navigation/Navigation'

const Layout = ({ children, data }) => (
  <>
    <Navigation />
    <main className={styles.layout}>{children}</main>
    <Footer data={data} />
  </>
)

export default Layout
