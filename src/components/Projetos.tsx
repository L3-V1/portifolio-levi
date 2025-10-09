import { Card } from "react-bootstrap";
import Section from "./styles/Section";
import Wrapper from "./styles/Wrapper";

export default function Projetos() {
  return (
    <Section id="projetos">
      <Wrapper className="gap-4" maxWidth={72}>
        <div className="display-4 mb-5">Projetos</div>

        {Array.from({ length: 10 }, (_, i) => (
          <Card key={i} className="text-center shadow rounded-4 p-5">
            <Card.Body>Projeto {i+1}</Card.Body>
          </Card>
        ))}
      </Wrapper>
    </Section>
  )
}