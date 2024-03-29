import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"

import Headshot from "../public/headshot.jpeg"
import LinkCard from "../components/LinkCard"

import { BookOpen, Twitter, Linkedin } from "react-feather"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Megan Wittman</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Megan Wittman</h1>
        <div className={styles.bio}>
          <p className={styles.description}>
            is a 2021-2025 Self Graduate Fellow pursuing a Ph.D. in
            Environmental Engineering. Originally from Central Illinois
            (Bloomington, IL), Wittman graduated with a B.S. in Chemical
            Engineering with an Environmental Engineering emphasis from the
            University of Kansas. She pursued undergraduate research, deepening
            her understanding of urban water sustainability and resource
            recovery beyond the classroom at KU and in collaboration with
            ReNUWIt, an interdisciplinary multi-institution engineering research
            center. She will be investigating microbial and kinetic mechanisms
            in nutrient removal, with the goal of ultimately lowering energy
            usage by wastewater treatment plants. Wittman is passionate about
            making data accessible and understandable to empower communities
            with sustainable water technologies.
            <br />
            <br /> Mentor: Belinda M.S. Sturm, Ph.D. Associate Vice Chancellor
            for Research, Professor of Civil, Environmental & Architectural
            Engineering
          </p>
          <div className={styles.imgContainer}>
            <Image src={Headshot} layout="fill" objectFit="cover" />
          </div>
        </div>

        <div className={styles.containerWithTitle}>
          <h2 className={styles.subTitle}>Links</h2>
          <div className={styles.grid}>
            <LinkCard
              desc="Follow me on Twitter to get frequent updates on current research."
              icon={<Twitter />}
              title="Twitter."
              link={"https://twitter.com/MeganOWittman"}
            />
            <LinkCard
              desc="Add me to your LinkedIn network, for a more professional feel."
              icon={<Linkedin />}
              title="LinkedIn."
              link={"https://www.linkedin.com/in/meganowittman"}
            />
            <LinkCard
              desc="See all of my publications and what I'm reading on Research Gate."
              icon={<BookOpen />}
              title="Research Gate."
              link={"https://www.researchgate.net/profile/Megan-Wittman"}
            />
          </div>
        </div>

        {/* <div className={styles.containerWithTitle}>
          <h2 className={styles.subTitle}>Current Work</h2>
          <div className={styles.bio}>
            <div className={styles.imgContainer}>
              <Image src={ReactorsImage} layout="fill" objectFit="cover" />
            </div>
            <ProjectCard
              title="Model Reactors"
              desc="I'm not sure what to put here, Megan still needs to send her abstract and all of the details about this project."
            />
          </div>
        </div> */}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
