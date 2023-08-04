import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

async function getData(id){
  const res= await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{cache:"no-cache"})
  if(!res.ok){
        console.log("error");
  }
  return res.json()
}
async function BolgPost({params}) {
  const data=await getData(params.id)
// console.log(data)

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>
            {data.body}
          </p>
          <div className={styles.author}>
            <Image
              src={"https://images.unsplash.com/photo-1690812099637-803c65c8e495?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Bablu kumar</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={"https://images.unsplash.com/photo-1690812099637-803c65c8e495?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"}
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum molestiae aliquid, quaerat voluptatum quisquam inventore iusto a omnis quo repellat porro vero facilis maiores alias veritatis, perferendis deleniti architecto ad.<br/><br/>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum molestiae aliquid, quaerat voluptatum quisquam inventore iusto a omnis quo repellat porro vero facilis maiores alias veritatis, perferendis deleniti architecto ad.<br/>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum molestiae aliquid, quaerat voluptatum quisquam inventore iusto a omnis quo repellat porro vero facilis maiores alias veritatis, perferendis deleniti architecto ad.<br/>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio inventore dignissimos ducimus minus saepe amet ut laudantium dolores, cum impedit ab odio similique iste doloremque necessitatibus. Nulla iusto deserunt dicta.
        </p>
      </div>
    </div>
  )
}

export default BolgPost