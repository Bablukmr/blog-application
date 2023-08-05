"use client"
import React, { useState } from 'react'
import styles from './register.module.css'
import Link from 'next/link'
import { useSWRConfig } from 'swr'
import { useRouter } from 'next/navigation'

export default function Register() {
  const router = useRouter()
  const [err, setErr] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const name = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    try {

      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      res.status === 201 && router.push("/dashboard/login?success=Account has been created");
    } catch (err) {
      setErr(true)
    }
  }

  return (
    <div className={styles.register}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input placeholder='Username' type='text' className={styles.input} required />
        <input placeholder='Email' type='email' className={styles.input} required />
        <input placeholder='Password' type='password' className={styles.input} required />
        <button className={styles.button}>Register</button>
      </form>
      {err && "Something is Wrong!"}
      <Link href={"/dashboard/login"}>Login With an Existing Account</Link>
    </div>
  )
}
