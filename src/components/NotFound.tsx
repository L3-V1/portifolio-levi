import * as Styled from "./Styled"
import { Button, Card } from "react-bootstrap";
import { AlertTriangle } from "lucide-react";
import { LinkContainer } from "react-router-bootstrap";

export default function NotFound() {
  return (
    <Styled.Fullscreen>
      <Card className="text-center shadow-lg border-0 rounded-4 p-5" style={{ maxWidth: "500px" }}>
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
      </Card>
    </Styled.Fullscreen>
  )
}