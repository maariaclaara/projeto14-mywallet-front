import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";


export function login() {
    const navigate = useNavigate();
    const { setToken, setEmail } = useContext(UserContext);
  
    return (body) => {
      axios
        .post(`${process.env.REACT_APP_API_URL}/signIn`, body)
        .then((response) => {
          setToken(response.data.token);
          setEmail(response.data.email);
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("setEmail", response.data.email);
          navigate("/home");
        })
        .catch((error) => alert(error.response.data));
    };
  }


export function register() {
  const navigate = useNavigate();

  return (body) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/signUp`, body)
      .then((response) => navigate("/"))
      .catch((error) => alert(error.response.data));
  };
}


export function logout() {
  const { token, setToken, setEmail} = useContext(UserContext);
  const navigate = useNavigate();
  const config = { headers: { Authorization: `Bearer ${token}` } };

  return () => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/logout`, {}, config)
      .then(() => {
        setToken(undefined);
        setEmail(undefined);
        localStorage.clear();
        navigate("/");
      })
      .catch((err) => alert(err.response.data));
  };
}