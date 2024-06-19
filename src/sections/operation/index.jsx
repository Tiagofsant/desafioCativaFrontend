import CardText from "../../components/cardText/index";
import Title from "../../components/title";
import "./styles.css";

// ----------------------------------------------------------

export default function Operation() {
  return (
    <div>
      <Title>Como Funciona?</Title>

      <div className="operation-container">
        <CardText
          title="Cadastre seu negócio"
          subtitle="Cadastre sua agência e comece a usar o sistema."
        />

        <CardText
          title="Engaje seus Clientes"
          subtitle="Clientes acumulam pontos a cada compra."
        />

        <CardText
          title="Recompense"
          subtitle="Ofereça recompensas exclusivas."
        />
      </div>
    </div>
  );
}
