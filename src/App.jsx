import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from "styled-components"
import HomePage from "./pages/HomePage"
import SignInPage from "./pages/SignInPage"
import SignUpPage from "./pages/SignUpPage"
import TransactionsPage from "./pages/TransactionPage"
import UserContext from "./context/UserContext"
import axios from "axios";
import { useState } from "react"

export default function App() {

  axios.defaults.headers.common['Authorization'] = 'THS0ss3MBlhP2DCxy9431DYx';
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [email, setEmail] = useState(localStorage.getItem("email"));


  return (
    <PagesContainer>
      <UserContext.Provider value={{ token, setToken, email, setEmail}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/cadastro" element={<SignUpPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/nova-transacao/:type" element={<TransactionsPage />} />
        </Routes>
      </BrowserRouter>
      </UserContext.Provider>
    </PagesContainer>
  )
}

const PagesContainer = styled.main`
  background-color: #8c11be;
  width: calc(100vw - 50px);
  max-height: 100vh;
  padding: 25px;
`
