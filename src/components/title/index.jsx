import "./styles.css";

// -------------------------------------------------

export default function Title({ children }) {
  return (
    <div className="title-container">
      <h1>{children}</h1>
    </div>
  );
}
