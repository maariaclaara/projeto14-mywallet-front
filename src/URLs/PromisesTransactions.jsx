import { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";
import axios from "axios";


export function useTransactions() {
    
  const [transactions, setTransactions] = useState(undefined);
  const { token } = useContext(UserContext);

  const config = { headers: { Authorization: `Bearer ${token}` } };

  function operateTransaction() {
    axios
      .get(`${import.meta.env.VITE_API_URL}/transactions`, config)
      .then((response) => setTransactions(response.data))
      .catch((error) => alert(error.response.data));
  }

  useEffect(() => {
    operateTransaction();
  }, []);

  return { transactions, operateTransaction};
}

