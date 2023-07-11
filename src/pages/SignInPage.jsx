import MyWalletLogo from "../components/MyWalletLogo";
import userUp from "../hooks/UserUp";
import userIn from "../hooks/UserIn";
import { Login } from "../URLs/Promises";
import styled from "styled-components";
import { Link } from "react-router-dom";


export default function SignInPage() {

  const { form, changeForm } = userUp({ email: "", password: "" });
  const userLogin = Login();
  userIn();

  function submitLogin(e) {
    e.preventDefault();
    userLogin(form);
  }

  return (
    <SingInContainer>
      <form onSubmit={submitLogin}>
        <MyWalletLogo />

        <input 
         data-test="email"
         placeholder="Email"
         type="email"
         value={form.email}
         onChange={changeForm}
         required />

        <input 
        data-test="password"
        placeholder="Senha" 
        type="password" 
        minLength={3}
        value={form.password}
        onChange={changeForm}
        required/>

        <button data-test="sign-in-submit" type="submit">Entrar</button>
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
