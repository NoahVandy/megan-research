import Link from "next/link"
import styles from "./styles.module.css"

import { useRouter } from "next/router"
import { useEffect } from "react"

export default function NavBar({ shrunk }) {
  const router = useRouter()

  return (
    <header
      id="navigation"
      className={shrunk ? styles.shrunkNavContainer : styles.navContainer}
    >
      <Link href="/">
        <a>Home</a>
      </Link>
      <div id="navigation-menu" className={styles.navMenu}>
        <ul>
          <li>
            <Link href="/about">
              <a
                className={
                  router.pathname.includes("about") && styles.navMenuActive
                }
              >
                About
              </a>
            </Link>
          </li>
          <li>
            <Link href="/research">
              <a>Research</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
