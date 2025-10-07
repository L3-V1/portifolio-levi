import { Fade } from './Fade/Fade.styles'
import { Col, Row } from 'react-bootstrap'
import { useInView } from '../hooks/useInView'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  height: 100%;
  max-width: 60rem;
  padding: 0 1.5rem;
`

const Description = styled.p`
  margin-bottom: 0;
  text-align: justify;
`

export default function Hero() {
  const { ref: leftRef, inView: leftInView } = useInView({ threshold: 0.3 })
  const { ref: rightRef, inView: rightInView } = useInView({ threshold: 0.3 })

  return (
    <section id="inicio" className="wrapper">
      <Container>
        <Row className="g-3 align-items-center">
          <Col xs="12" md="6">
            <Fade ref={leftRef} inView={leftInView} direction="left">
              <h1 className="display-3 text-center text-md-start">
                Levi Moraes
              </h1>
            </Fade>
          </Col>
          <Col xs="12" md="6">
            <Fade ref={rightRef} inView={rightInView} direction="right">
              <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, possimus! Corrupti 
                saepe ex beatae voluptates animi accusantium quaerat dolorum, earum fugiat officiis 
                corporis laborum ut. Unde laborum corporis deserunt voluptas! Lorem ipsum dolor sit, 
                amet consectetur adipisicing elit. Culpa, magni. Eius, accusantium? Praesentium 
                reprehenderit facilis doloribus? Labore aperiam fugiat voluptates cupiditate 
                temporibus, consectetur ducimus necessitatibus eveniet adipisci sapiente sed nihil.
              </Description>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  )
}