import CardBeneficits from "../../components/cardBeneficits/index";
import Title from "../../components/title";
import "./styles.css";

// ------------------------------------------------------------------------

export default function Beneficits() {
  return (
    <div className="beneficits-container">
      <Title>Conheça um pouco do que podemos oferecer a seus clientes</Title>

      <div className="beneficits-content">
        <CardBeneficits title="Clube de vantagens e benefícios" />
        <CardBeneficits title="Cashbacks em cada compra" />
        <CardBeneficits title="Cashbacks convertidos em milhas " />
        <CardBeneficits title="Gestão de envio de SMS, e-mail e mensagem automatizadas" />
        <CardBeneficits title="Atendimento humanizado " />
        <CardBeneficits title="Integração com softwares de terceiros" />
        <CardBeneficits title="Descontos em viagens e passagens aéreas " />
        <CardBeneficits title="Descontos em alguéis de carros e hospedagens " />
      </div>
    </div>
  );
}
