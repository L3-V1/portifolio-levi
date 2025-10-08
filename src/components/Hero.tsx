import { Col, Row } from 'react-bootstrap'
import { useInView } from '../hooks/useInView'
import Fade from './styles/Fade'
import Section from './styles/Section'
import styled from 'styled-components'

const Wrapper = styled.div`
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
    <Section id="inicio">
      <Wrapper>
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
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque commodi ullam maxime, harum placeat totam autem in doloribus, provident iure officia accusamus excepturi laborum, saepe adipisci nemo nihil? Itaque, iste.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error vitae dolorem accusamus saepe a. Maiores corporis est repudiandae reiciendis atque voluptatum sequi amet, odio cum quas harum inventore, incidunt laborum.
              </Description>
            </Fade>
          </Col>
        </Row>
      </Wrapper>
    </Section>
  )
}