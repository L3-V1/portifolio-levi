import { Button, Card } from "react-bootstrap";
import { AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router";

export default function NotFound() {
  const navigate = useNavigate()
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <Card className="text-center shadow-lg border-0 rounded-4 p-5" style={{ maxWidth: "500px" }}>
        <Card.Body>
          <AlertTriangle className="text-danger mb-3" size={60} strokeWidth={1.5} />
          <h1 className="display-3 fw-bold text-danger">404</h1>
          <h2 className="h4 mb-3">Página não encontrada</h2>
          <p className="text-muted mb-4">O endereço que você tentou acessar não existe ou foi movido.</p>
          <Button
            type="button"
            variant="danger"
            className="px-4 py-2"
            onClick={() => navigate("/")}
          >
            Voltar para a página inicial
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}