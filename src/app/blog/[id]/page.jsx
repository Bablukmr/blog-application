
import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`) //,{cache:"no-cache"}
  if (!res.ok) {
    console.log("error");
  }
  return res.json()
}
async function BolgPost({params}) {
  // console.log(params)
  const data = await getData(params.id)

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>
            {data.desc}
          </p>
          <div className={styles.author}>
            <img
              src={data.img}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{data.username}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img
            src={data.img}
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          {data.content}
        </p>
      </div>
    </div>
  )
}
export async function generateMetadata({params}){
  // console.log(params);
  const post=await getData(params.id)
  return{
    title:post.title,
    description:post.desc
  }
}


export default BolgPost