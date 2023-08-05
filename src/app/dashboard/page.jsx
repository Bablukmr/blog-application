"use client"
import React, { useEffect, useState } from 'react'
import styles from './dashboard.module.css'
import useSWR from 'swr'
import { useSession } from 'next-auth/react'

export default function Dashboard() {
// const [data,setData]=useState([])
// const [err,setErr]=useState(false)
// const [loading,setLoading]=useState(false)

// useEffect(()=>{
//   const  getData=async()=>{
//     setLoading(true)
//   const res= await fetch("https://jsonplaceholder.typicode.com/posts",{cache:"no-cache"})
//   if(!res.ok){
//     setErr(true)
//   }
// const result =await res.json()
// setData(result)
//   setLoading(false)
// }
// getData()
// },[])
const session = useSession()
console.log(session);
const fetcher = (...args) => fetch(...args).then((res) => res.json())
const { data, error } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)
// console.log(data)
  return (
    <div className={styles.dashboard}>Dashboard</div>
  )
}
