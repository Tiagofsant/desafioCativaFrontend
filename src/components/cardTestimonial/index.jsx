import "./styles.css";

// ------------------------------------------------------------------

export default function CardTestimonal({ src, name, description, children }) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-header">
        <img
          width="61px"
          height="61px"
          src={src}
          alt="Avatar"
          style={{ borderRadius: "50%" }}
        />

        <div>
          <h2>{name}</h2>
          <h4 gutterBottom variant="body1" component="div">
            {description}
          </h4>
        </div>
      </div>

      <div style={{ margin: "30px 0px" }}>
        <p variant="body1" color="text.secondary" align="justify">
          {children}
        </p>
      </div>
    </div>
  );
}
