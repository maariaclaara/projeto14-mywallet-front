import userOut from "../hooks/UserOut";
import { useParams } from "react-router-dom";
import userUp from "../hooks/UserUp";
import { NewTransaction } from "../URLs/NewTransaction";
import styled from "styled-components";


export default function AddTransactionsPage() {

  const { form, changeForm } = userUp({ description: "", value: "" });
  const { type } = useParams();
  const typeText = type === "entrada" ? "Entrada" : "Saída";
  const addTransaction = NewTransaction();
  userOut();

  function submit(e) {
    e.preventDefault();
    const body = { ...form, type: type === "entrada" ? "income" : "expense" };
    addTransaction(body);
  }

  return (
    <TransactionsContainer>
      <h1>Nova {typeText}</h1>
      <form onSubmit={submit}>
        <input
          data-test="registry-amount-input"
          required
          type="number"
          placeholder="Valor"
          name="value"
          value={form.value}
          onChange={changeForm}
        />
        <input
          data-test="registry-name-input"
          required
          placeholder="Descrição"
          name="description"
          value={form.description}
          onChange={changeForm}
        />
        <button type="submit">Salvar {typeText}</button>
      </form>
    </TransactionsContainer>
  );
}

const TransactionsContainer = styled.main`
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  h1 {
    align-self: flex-start;
    margin-bottom: 40px;
  }
`
