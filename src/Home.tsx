import { Col, Row } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <section id="inicio">
        <div className="section-container">
          <div className="px-4 px-lg-0">
            <Row className="g-3 align-items-center">
              <Col xs="12" md="6">
                <h1 className="display-3 text-center text-md-start">Levi Moraes</h1>
              </Col>
              <Col xs="12" md="6">
                <p className="mb-0" style={{ textAlign: "justify" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, possimus! Corrupti saepe ex beatae voluptates animi accusantium quaerat dolorum, earum fugiat officiis corporis laborum ut. Unde laborum corporis deserunt voluptas! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, magni. Eius, accusantium? Praesentium reprehenderit facilis doloribus? Labore aperiam fugiat voluptates cupiditate temporibus, consectetur ducimus necessitatibus eveniet adipisci sapiente sed nihil.
                </p>
              </Col>
            </Row>
          </div>
        </div>
      </section>

      <section id="sobre">
        <h2>Sobre Mim</h2>
      </section>

      <section id="projetos">
        <h2>Projetos</h2>
      </section>

      <section id="contato">
        <h2>Contato</h2>
      </section>
    </>
  )
}