import { useState } from "react";


export default function userUp() {
    const [form, setForm] = useState("");
  
    function changeForm(e) {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  
    return { form, changeForm};
  }