import styles from "./styles.module.css"

import { useMemo } from "react"

export default function LinkCard({ title, desc, link, icon }) {
  const titleColor = useMemo(() => {
    if (title === "Twitter.") {
      return styles.twitterTitle
    } else if (title === "LinkedIn.") {
      return styles.linkedInTitle
    } else if (title === "Research Gate.") {
      return styles.researchGateTitle
    }
  })

  return (
    <a href={link} className={styles.card}>
      {icon}
      <h4 className={titleColor}>{title}</h4>
      <p>{desc}</p>
    </a>
  )
}
