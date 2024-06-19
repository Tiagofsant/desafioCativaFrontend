import "./styles.css";

// --------------------------------------------------------------------

export default function CardText({ title, subtitle }) {
  return (
    <div>
      <div className="card-top">
        <h2 style={{ color: "#FFF", textAlign: "center" }}>{title}</h2>
      </div>

      <div className="card-down">
        <h3 align="center">{subtitle}</h3>
      </div>
    </div>
  );
}
