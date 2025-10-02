import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet } from "react-router";
import { Toaster } from "react-hot-toast";

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
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar expand="sm" fixed="top" className="bg-body-tertiary border-bottom shadow-sm py-3">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <span className="fw-bold">Levi Moraes</span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav defaultActiveKey="inicio" className="me-auto">
              <Nav.Item>
                <Nav.Link eventKey="inicio" href="#inicio">Início</Nav.Link>
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
      <div className="flex-grow-1">
        <div style={{ paddingTop: "6rem" }}>
          <Outlet />
        </div>
      </div>
      <Toaster />
    </div>
  )
}