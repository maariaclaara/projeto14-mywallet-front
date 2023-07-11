import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";


export function Login() {
    const navigate = useNavigate();
    const { setToken, setEmail } = useContext(UserContext);
  
    return (body) => {
      axios
        .post(`${import.meta.env.VITE_API_URL}/signIn`, body)
        .then((response) => {
          setToken(response.data.token);
          setEmail(response.data.email);
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("setEmail", response.data.email);
          navigate("/home");
        })
        .catch((error) => alert(error.message));
    };
  }


export function Register() {
  const navigate = useNavigate();

  return (body) => {
    axios
      .post(`${import.meta.env.VITE_API_URL}/signUp`, body)
      .then((response) => navigate("/"))
      .catch((error) => console.log(error));
  };
}


export function Logout() {
  const { token, setToken, setEmail} = useContext(UserContext);
  const navigate = useNavigate();
  const config = { headers: { Authorization: `Bearer ${token}` } };

  return () => {
    axios
      .post(`${import.meta.env.VITE_API_URL}/logout`, {}, config)
      .then((response) => {
        setToken(undefined);
        setEmail(undefined);
        localStorage.clear();
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };
}