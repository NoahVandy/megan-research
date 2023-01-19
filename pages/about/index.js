import Image from "next/image"
import Link from "next/link"

import styles from "./styles.module.css"

import AboutMeImage from "../../public/about_me.png"

export default function About() {
  return (
    <div className={styles.subPage}>
      <div className={styles.aboutMe}>
        <div className={styles.imgContainer}>
          <Image src={AboutMeImage} layout="fill" objectFit="cover" />
        </div>
        <div className={styles.aboutMeContent}>
          <h1 className={styles.title}>👩🏼‍🔬 About me</h1>
          <p>
            You can find more about me through my self graduate profile{" "}
            <Link href="https://selfgraduate.ku.edu/2021-2025-self-graduate-fellows">
              <a className={styles.link}>here, </a>
            </Link>
            or through my research lab group{" "}
            <Link href="http://www.people.ku.edu/~bmcswain/phone/index.html">
              <a className={styles.link}>here.</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
