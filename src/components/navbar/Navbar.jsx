'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import styles from './navbar.module.css'
import Darkmode from '../Darkmode/darkmode'
import { signOut, useSession } from 'next-auth/react'

const links = [
    {
        id: 1,
        title: "Home",
        url: "/"
    },
    {
        id: 2,
        title: "Portfolio",
        url: "/portfolio"
    },
    {
        id: 3,
        title: "Blog",
        url: "/blog"
    },
    {
        id: 4,
        title: "About",
        url: "/about"
    },
    {
        id: 5,
        title: "Contact",
        url: "/contact"
    },
    {
        id: 6,
        title: "Dashboard",
        url: "/dashboard"
    },
]

export default function Navbar() {
    const [nav, setNav] = useState(true)
    const session = useSession()
    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className={styles.navbar}>
            <Link className={styles.logo} href={'/'}>Bolgger</Link>
            <div className={styles.links}>
                <Darkmode />
                {
                    links.map((item) => (
                        <Link className={styles.link} key={item.id} href={item.url}>{item.title}</Link>
                    ))
                }
                {
                    session.status == "authenticated" && <button onClick={signOut} className={styles.logout}>Logout</button>
                }

            </div>
            <div className={styles.mobile}>
            <Darkmode  />
                {nav ? <div onClick={handleNav} className={styles.homemenu} >  &#9776;</div>
                    :

                    <div onClick={handleNav} className={styles.mobilemenue}>
                        
                        <div onClick={handleNav} className={styles.homecross}>&#935;</div>
                        <div style={{zIndex:"99999"}}>
                            {
                                links.map((item) => (
                                    <Link onClick={handleNav} className={styles.mobilelink} key={item.id} href={item.url}>{item.title}</Link>
                                ))
                            }
                           <div className={styles.logouts}> 
                            {
                    session.status == "authenticated" && <button onClick={signOut} className={styles.logout}>Logout</button>
                }</div>
                        </div>

                    </div>
                }
            </div>
        </div>
    )
}
