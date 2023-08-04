import React from 'react'
import styles from './portfolio.module.css'
import Link from 'next/link'
export default function Portfolio() {
  return (
    <div className={styles.portfolio}>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>
      <div className={styles.items}>
        <Link href={"/portfolio/illutration" }className={styles.item}><span className={styles.title}>illustrations</span></Link>
        <Link href={"/portfolio/websites" }className={styles.item}><span className={styles.title}>Websites</span></Link>
        <Link href={"/portfolio/application" }className={styles.item}><span className={styles.title}>Application</span></Link>
      </div>
    </div>
  )
}
