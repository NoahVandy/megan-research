import NavBar from "./NavBar"

export default function Layout({ children, shrunk }) {
  return (
    <>
      <NavBar shrunk={shrunk} />
      {children}
    </>
  )
}
