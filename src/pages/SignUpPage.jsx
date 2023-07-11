import MyWalletLogo from "../components/MyWalletLogo";
import userUp from "../hooks/UserUp";
import userIn from "../hooks/UserIn";
import { Register } from "../URLs/Promises";
import styled from "styled-components";
import { Link } from "react-router-dom";


export default function SignUpPage() {

  const { form, changeForm} = userUp({ name: "", email: "", password: "", confirmPassword: "" });
  userIn();
  const signUp = Register();

  function submitUp(e) {
    e.preventDefault();
    if (form.password !== form.confirmPassword)
      return alert("As senhas são diferentes!");

    delete form.confirmPassword;
    signUp();
  }


  return (
    <SingUpContainer>
        <form onSubmit={submitUp}>

        <MyWalletLogo />

        <input 
        data-test="name"
        placeholder="Nome" 
        type="text" 
        value={form.name}
        onChange={changeForm}
        required />

        <input 
        data-test="email"
        placeholder="E-mail" 
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
        required />

        <input 
        data-test="conf-password"
        placeholder="Confirme a senha" 
        type="password" 
        minLength={3} 
        value={form.confirmPassword}
        onChange={changeForm}
        required />

        <button data-test="sign-up-submit" type="submit">Cadastrar</button>
      </form>

      <Link to="/">
        Já tem uma conta? Entre agora!
      </Link>
    </SingUpContainer>
  )
}

const SingUpContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
