import styles from "../styles.module.css"
import Image from "next/image"

export default function PaperContainer({ img, title, link }) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={styles.paperContainer}
      href={link}
    >
      <div className={styles.paperImgContainer}>
        <Image src={img} layout="fill" objectFit="cover" />
      </div>
      <h3>{title}</h3>
    </a>
  )
}
