import Image from "next/image"

import styles from "./styles.module.css"

import ReactorsImage from "../../public/reactors.jpg"
import PaperContainer from "./PaperContainer"
import paperImg1 from "../../public/paperImg1.png"

export default function About() {
  return (
    <>
      <div className={styles.subPage}>
        <div className={styles.imgContainer}>
          <Image src={ReactorsImage} layout="fill" objectFit="cover" />
        </div>
        <h1 className={styles.title}>Research</h1>
      </div>
      <div className={styles.container}>
        <h2>Papers and Projects</h2>
        <PaperContainer
          img={paperImg1}
          title={
            "Improving correlation of wastewater SARS-CoV-2 gene copy numbers with COVID-19 public health cases using readily available biomarkers"
          }
          link={
            "https://academic.oup.com/femsmicrobes/article/doi/10.1093/femsmc/xtac010/6562076?login=true"
          }
        />
      </div>
    </>
  )
}
