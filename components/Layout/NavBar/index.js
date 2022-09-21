import styles from "./styles.module.css"

export default function NavBar({ shrunk }) {
  return (
    <header
      id="navigation"
      className={shrunk ? styles.shrunkNavContainer : styles.navContainer}
    >
      <p>test</p>
      <div id="navigation-menu" className={styles.navMenu}>
        <ul>
          <li>test</li>
          <li>test</li>
          <li>test</li>
        </ul>
      </div>
    </header>
  )
}
