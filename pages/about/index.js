import Image from "next/image"

import styles from "./styles.module.css"

import ReactorsImage from "../../public/reactors.jpg"

export default function About() {
  return (
    <div className={styles.subPage}>
      <div className={styles.imgContainer}>
        <Image src={ReactorsImage} layout="fill" objectFit="cover" />
      </div>
      <h1 className={styles.title}>👩🏼‍🔬 About me</h1>
      <p>This is me and my reactors :)</p>
    </div>
  )
}
