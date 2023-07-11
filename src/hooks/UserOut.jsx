import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext"


export default function userOut() {
    const { email, token } = useContext(UserContext);
    const navigate = useNavigate();
  
    useEffect(() => {
      if (!token || !email) navigate("/");
    }, []);
  }