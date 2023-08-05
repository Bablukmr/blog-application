"use client"
import React, { useContext } from 'react'

import styles from './darkomde.module.css'
import { ThemeContext } from '../../comtext/themeContext'

export default function Darkmode() {
const {toggle,mode}=useContext(ThemeContext)
  return (
    <div className={styles.main} onClick={toggle}>
        <div className={styles.icon}>🌙</div>
        <div className={styles.icon}> ☀️</div>
        <div className={styles.ball} style={mode==="light" ? {left:"2px"}: {right:"2px"}}></div>
    </div>
  )
}
