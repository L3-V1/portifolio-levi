import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet } from "react-router";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";

const navigation = [
  {
    key: "sobre",
    label: "Sobre",
    link: "#sobre"
  },
  {
    key: "projetos",
    label: "Projetos",
    link: "#projetos"
  },
  {
    key: "contato",
    label: "Contato",
    link: "#contato"
  }
]

export default function Layout() {
  useEffect(() => {
    const navbar = document.querySelector(".navbar") as HTMLElement
    if (navbar) {
      document.body.style.paddingTop = `${navbar.offsetHeight}px`
    }
  }, [])

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar expand="sm" fixed="top" className="bg-body-tertiary border-bottom shadow-sm py-3">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              alt="Logo Vite"
              src="vite.svg"
              width={30}
              height={30}
              className="d-inline-block align-top"
            />{" "}
            Levi Moraes
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav defaultActiveKey="hero" className="me-auto">
              <Nav.Item>
                <Nav.Link eventKey="hero" href="#hero">Início</Nav.Link>
              </Nav.Item>
              {navigation.map((item) => (
                <Nav.Item key={item.key}>
                  <Nav.Link eventKey={item.key} href={item.link}>{item.label}</Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="flex-grow-1 p-4">
        <div className="mx-auto" style={{ maxWidth: "56rem" }}>
          <Outlet />
        </div>
      </div>
      <Toaster />
    </div>
  )
}