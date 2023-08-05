"use client"
import React from 'react'
import styles from './login.module.css'
import { signIn } from 'next-auth/react'
export default function Login() {
  return (
    <div className={styles.login}>
      <button onClick={()=>signIn("google")}>Login With Google</button>
    </div>
  )
}
