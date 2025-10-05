import { Container, Nav, Navbar } from "react-bootstrap";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router";

const navigation = [
  {
    key: "inicio",
    link: "#inicio",
    label: "Início"
  },
  {
    key: "sobre",
    link: "#sobre",
    label: "Sobre"
  },
  {
    key: "projetos",
    link: "#projetos",
    label: "Projetos"
  },
  {
    key: "contato",
    link: "#contato",
    label: "Contato",
  }
]

export default function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar
        expand="md"
        sticky="top"
        className="bg-body-tertiary border-bottom shadow-sm"
      >
        <Container>
          <Navbar.Brand href="#inicio">
            <span className="fw-bold">Levi Moraes</span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav defaultActiveKey={navigation[0].key} className="ms-auto">
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
        <Outlet />
      </div>
      <Toaster />
    </div>
  )
}