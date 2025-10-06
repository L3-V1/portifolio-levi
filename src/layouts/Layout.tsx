import * as Styled from "../components/Styled"
import { Container, Nav, Navbar } from "react-bootstrap";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router";
import Hero from "../components/Hero";
import Sobre from "../components/Sobre";
import Projetos from "../components/Projetos";
import Contato from "../components/Contato";

export const navigation = [
  {
    key: "inicio",
    link: "#inicio",
    label: "Início",
    component: <Hero />
  },
  {
    key: "sobre",
    link: "#sobre",
    label: "Sobre",
    component: <Sobre />
  },
  {
    key: "projetos",
    link: "#projetos",
    label: "Projetos",
    component: <Projetos />
  },
  {
    key: "contato",
    link: "#contato",
    label: "Contato",
    component: <Contato />
  }
]

export default function Layout() {
  return (
    <Styled.Layout>
      <Navbar
        expand="md"
        sticky="top"
        className="bg-body-tertiary border-bottom shadow-sm"
      >
        <Container>
          <Navbar.Brand href={navigation[0].link}>
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
    </Styled.Layout>
  )
}