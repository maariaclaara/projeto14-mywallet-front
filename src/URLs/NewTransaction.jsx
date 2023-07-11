import { useContext } from "react";
import UserContext from "../context/UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function NewTransaction() {
    const { token } = useContext(UserContext);
    const navigate = useNavigate();
  
    const config = { headers: { Authorization: `Bearer ${token}` } };
  
    return (body) => {
      axios
        .post(`${import.meta.env.VITE_API_URL}/transactions`, body, config)
        .then((response) => navigate("/home"))
        .catch((error) => alert(error.response.data));
    };
  }