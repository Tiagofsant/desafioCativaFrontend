import { Button, Divider } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import CustomTextField from "../customTextfield";
import "./styles.css";

// -------------------------------------------------------------------------

export default function CompanyForm() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [userName, setUserName] = useState("");
  const [userNickname, setUserNickname] = useState("");
  const [instagram, setInstagram] = useState("");

  console.log(email);
  console.log(phone);
  console.log(companyName);
  console.log(userName);
  console.log(userNickname);
  console.log(instagram);

  const handleClearAll = () => {
    setEmail("");
    setPhone("");
    setCompanyName("");
    setUserName("");
    setUserName("");
    setUserNickname("");
    setInstagram("");
  };

  const handleRegister = async () => {
    const url = "http://localhost:3000";

    const body = {
      email: email,
      phone: phone,
      company: companyName,
      instagram: instagram,
      userName: userName,
      userNickname: userNickname,
    };

    await axios
      .post(url, body)
      .then(() => {
        handleClearAll;
        alert(
          "Parabéns! Seus dados foram cadastrados com sucesso. Aguarde que em breve nosso time entrará em contato com você!"
        );
      })
      .catch((err) => {
        alert("Falha ao enviar o cadastro: ", err);
        console.log(err);
      });
  };

  return (
    <div className="card-form">
      <div className="header-form">
        <h2 style={{ textAlign: "center", margin: "20px" }}>
          Quero fidelizar meus clientes
        </h2>

        <Divider />
      </div>

      <div className="side-by-side">
        <CustomTextField
          label="E-mail Corportativo *"
          placeholder="Digite seu e-mail"
          type="text"
          value={email}
          onchange={(event) => setEmail(event.target.value)}
        />

        <CustomTextField
          label="WhatsApp com DDD *"
          placeholder="119999999999"
          type="text"
          value={phone}
          onchange={(event) => setPhone(event.target.value)}
        />
      </div>

      <div className="side-by-side">
        <CustomTextField
          label="Empresa *"
          placeholder="Digite o nome da sua empresa"
          type="text"
          value={companyName}
          onchange={(event) => setCompanyName(event.target.value)}
        />

        <CustomTextField
          label="Instagram Emprarial *"
          placeholder="@nome_perfil"
          type="text"
          value={instagram}
          onchange={(event) => setInstagram(event.target.value)}
        />
      </div>

      <div className="side-by-side">
        <CustomTextField
          label="Nome *"
          placeholder="Digite o seu nome"
          type="text"
          value={userName}
          onchange={(event) => setUserName(event.target.value)}
        />

        <CustomTextField
          label="Sobrenome *"
          placeholder="Digite o seu sobrenome"
          type="text"
          value={userNickname}
          onchange={(event) => setUserNickname(event.target.value)}
        />
      </div>

      <div className="card-actions">
        <Button variant="outlined" onClick={handleClearAll}>
          Limpar Tudo
        </Button>
        <Button variant="contained" onClick={handleRegister}>
          Enviar
        </Button>
      </div>
    </div>
  );
}
