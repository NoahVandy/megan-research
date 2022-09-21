import { useEffect, useState, useMemo } from "react"

import Layout from "../components/Layout"

import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  const [shrunk, setShrunk] = useState(false)

  const handleScroll = () => {
    setShrunk(window.scrollY > 100)
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <Layout shrunk={shrunk}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
