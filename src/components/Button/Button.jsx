import React from 'react'
import styles from './button.module.css'
import Link from 'next/link'

export default function Button({text,url}) {
  return (
    <div><Link href={url}><button className={styles.button}>{text}</button></Link> </div>
  )
}
