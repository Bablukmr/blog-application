import React from 'react'
import styles from './portfolio.module.css'

export default function Layout({children}) {
  return (
    <div>
        <h1 className={styles.maintitle}>Our Work</h1>
         {children}
         
    </div>
  )
}
