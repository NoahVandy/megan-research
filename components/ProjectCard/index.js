import Image from "next"

import styles from "./styles.module.css"

export default function ProjectCard({ title, desc }) {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  )
}
