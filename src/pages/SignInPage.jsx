import MyWalletLogo from "../components/MyWalletLogo";
import userUp from "../hooks/userUp";
import userIn from "../hooks/userIn";
import { login } from "../URLs/promises";
import styled from "styled-components";
import { Link } from "react-router-dom";


export default function SignInPage() {

  const { form, changeForm } = userUp({ email: "", password: "" });
  const userLogin = login();
  userIn();

  function submit(e) {
    e.preventDefault();
    userLogin(form);
  }

  return (
    <SingInContainer>
      <form onSubmit={submit}>
        <MyWalletLogo />

        <input 
         placeholder="Email"
         type="email"
         value={form.email}
         onChange={changeForm}
         required />

        <input placeholder="Senha" 
        type="password" 
        minLength={3}
        value={form.password}
        onChange={changeForm}
        required/>

        <button type="submit">Entrar</button>
      </form>

      <Link to="/cadastro">
        Primeira vez? Cadastre-se!
      </Link>
    </SingInContainer>
  )
}

const SingInContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
