'use client'
import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'
import Darkmode from '../Darkmode/darkmode'

const links=[
    {
        id:1,
        title:"Home",
        url:"/"
    },
    {
        id:2,
        title:"Portfolio",
        url:"/portfolio"
    },
    {
        id:3,
        title:"Blog",
        url:"/blog"
    },
    {
        id:4,
        title:"About",
        url:"/about"
    },
    {
        id:5,
        title:"Contact",
        url:"/contact"
    },
    {
        id:6,
        title:"Dashboard",
        url:"/dashboard"
    },
]
export default function Navbar() {
  return (
    <div className={styles.navbar}>
        <Link className={styles.logo} href={'/'}>Bolgger</Link>
        <div className={styles.links}>
            <Darkmode/>
           {
            links.map((item)=>(
                <Link className={styles.link} key={item.id} href={item.url}>{item.title}</Link>
            ))
           }
            <button onClick={()=>console.log("logged out")} className={styles.logout}>Logout</button>
        </div>
    </div>
  )
}
