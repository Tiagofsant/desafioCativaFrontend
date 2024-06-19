import { TextField } from "@mui/material";
import "./styles.css";

// -----------------------------------------------------------

export default function CustomTextField({
  label,
  type,
  placeholder,
  value,
  onchange,
}) {
  return (
    <div className="root">
      <h3>{label}</h3>

      <div className="container">
        <TextField
          required
          fullWidth
          type={type}
          label={placeholder}
          variant="filled"
          value={value}
          onChange={onchange}
        />
      </div>
    </div>
  );
}
