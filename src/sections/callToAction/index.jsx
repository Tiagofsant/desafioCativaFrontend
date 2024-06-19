import CompanyForm from "../../components/companyForm/index";
import "./styles.css";

// ---------------------------------------------------------------------

export default function CallToAction() {
  return (
    <div className="action-container">
      <div className="action-text">
        <h1 style={{ color: "#FDC52A" }}>
          Chega de perder clientes para a concorrência!
        </h1>

        <h2 style={{ color: "#FFF" }}>
          Preenche o formulário abaixo e fidelize seus clientes agora mesmo!
        </h2>

        <div className="action-form">
          <CompanyForm />
        </div>
      </div>
    </div>
  );
}
