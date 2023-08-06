import React from 'react'
import styles from './about.module.css'
import img from 'public/about.jpg'
import Image from 'next/image'
import Button from '@/components/Button/Button'

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.imgcontainer}>
        <Image src={img} fill={true} alt='IMG' className={styles.img}/>
        <div className={styles.imgtext}>
        <h1 className={styles.imgtitle}>Digital Storyteller</h1>
        <h1 className={styles.imgdes}>Hand crafting award winning digital experience</h1>
      </div>
      </div>
     
      <div className={styles.textcontainer}>
      <div className={styles.texts}>
        <h1>Who Are We ?</h1>
        <p>Storytelling Expertise: Digital Storytellers possess a deep understanding of storytelling techniques, including plot development, character arcs, emotional resonance, and pacing. They know how to engage audiences and evoke emotions through their narratives.<br/> <br/>
        Digital Media Skills: These professionals are adept at using a wide range of digital media, including video, audio, images, graphics, animation, and interactive elements. They leverage these tools to craft multi-dimensional and immersive experiences.<br/><br/><br/> Audience Understanding: Digital Storytellers have a keen understanding of their target audience, ensuring that their stories resonate with the intended viewers and users. They tailor their narratives to meet the preferences and interests of their audience.</p>
      </div>
      <div className={styles.texts}>
      <h1>What We Do ?</h1>
        <p>Providing Information: I can answer questions and provide information on various subjects, such as general knowledge, history, science, technology, literature, and more.<br/> <br/>
        Language Assistance: I can help with writing, grammar, and language-related queries, providing suggestions and corrections.</p>
        <Button url='/contact' text="Contact" />
      </div>
      </div>
      </div>
    
  )
}
