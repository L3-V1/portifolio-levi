import { Button, Card } from "react-bootstrap";
import { AlertTriangle } from "lucide-react";
import { LinkContainer } from "react-router-bootstrap";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`

const StyledCard = styled(Card)`
  max-width: 500px;
  padding: 3rem;
  margin: 0 auto;
  text-align: center;
  box-shadow: var(--bs-box-shadow-lg);
  border-radius: var(--bs-border-radius-lg);
`

export default function NotFound() {
  return (
    <Container>
      <StyledCard>
        <Card.Body>
          <AlertTriangle className="text-danger mb-3" size={60} strokeWidth={1.5} />
          <h1 className="display-3 fw-bold text-danger">404</h1>
          <h2 className="h4 mb-3">Página não encontrada</h2>
          <p className="text-muted mb-4">O endereço que você tentou acessar não existe ou foi movido.</p>
          <LinkContainer to="/">
            <Button
              type="button"
              variant="danger"
              className="px-4 py-2"
            >
              Voltar para a página inicial
            </Button>
          </LinkContainer>
        </Card.Body>
      </StyledCard>
    </Container>
  )
}