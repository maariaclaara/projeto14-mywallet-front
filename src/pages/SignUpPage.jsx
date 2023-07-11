import MyWalletLogo from "../components/MyWalletLogo";
import userUp from "../hooks/userUp";
import userIn from "../hooks/userIn";
import { register } from "../URLs/promises";
import styled from "styled-components";
import { Link } from "react-router-dom";


export default function SignUpPage() {

  const { form, changeForm} = userUp({ name: "", email: "", password: "", confirmPassword: "" });
  userIn();
  const signUp = register();

  function submit(e) {
    e.preventDefault();
    if (form.password !== form.confirmPassword)
      return alert("As senhas são diferentes!");

    delete form.confirmPassword;
    signUp(form);
  }


  return (
    <SingUpContainer>
        <form onSubmit={submit}>

        <MyWalletLogo />

        <input 
        placeholder="Nome" 
        type="text" 
        value={form.name}
        onChange={changeForm}
        required />

        <input 
        placeholder="E-mail" 
        type="email" 
        value={form.email}
        onChange={changeForm}
        required />

        <input 
        placeholder="Senha" 
        type="password" 
        minLength={3} 
        value={form.password}
        onChange={changeForm}
        required />

        <input 
        placeholder="Confirme a senha" 
        type="password" 
        minLength={3} 
        value={form.confirmPassword}
        onChange={changeForm}
        required />

        <button type="submit">Cadastrar</button>
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
