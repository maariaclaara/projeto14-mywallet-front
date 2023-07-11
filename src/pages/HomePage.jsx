import userOut from "../hooks/UserOut";
import { BiExit } from "react-icons/bi";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import { Logout } from "../URLs/Promises";
import { useTransactions } from "../URLs/PromisesTransactions";
import styled from "styled-components";


export default function HomePage() {
  const { name } = useContext(UserContext);
  const navigate = useNavigate();
  const userLogout = Logout();
  const { transactions, useTransaction } = useTransactions();
  userOut();

  function calculate() {
    const number = transactions.reduce(
      (acc, cur) => (cur.type === "income" ? acc + cur.value : acc - cur.value),
      0
    );
    return number.toFixed(2);
  }

  const balance = transactions && calculate();

  return (
    <HomeContainer>
      <Header>
        <h1 data-test="user-name">Olá, {name}</h1>
        <BiExit data-test="logout" onClick={userLogout} />
      </Header>

      <TransactionsContainer>
        {transactions && transactions.length === 0 && (
          <>Não há registros de entrada ou saída</>
        )}
        {transactions && transactions.length > 0 && (
          <ListItemContainer data-test="registry-name">
            <article>
              <strong data-test="total-amount">Saldo</strong>
              <Value color={balance > 0 ? "positivo" : "negativo"}>
                {balance.toString().replace(".", ",")}
              </Value>
            </article>
          </ListItemContainer>
        )}
      </TransactionsContainer>

      <ButtonsContainer>
        <button data-test="registry-amount" onClick={() => navigate("/nova-transacao/entrada")}>
          <AiOutlinePlusCircle data-test="new-income"/>
          <p>
            Nova <br /> entrada
          </p>
        </button>
        <button data-test="registry-amount" onClick={() => navigate("/nova-transacao/saida")}>
          <AiOutlineMinusCircle data-test="new-expense"/>
          <p>
            Nova <br />
            saída
          </p>
        </button>
      </ButtonsContainer>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 50px);
`
const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2px 5px 2px;
  margin-bottom: 15px;
  font-size: 26px;
  color: white;
`
const TransactionsContainer = styled.article`
  flex-grow: 1;
  background-color: #fff;
  color: #000;
  border-radius: 5px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  article {
    display: flex;
    justify-content: space-between;   
    strong {
      font-weight: 700;
      text-transform: uppercase;
    }
  }
`
const ButtonsContainer = styled.section`
  margin-top: 15px;
  margin-bottom: 0;
  display: flex;
  gap: 15px;
  
  button {
    width: 50%;
    height: 115px;
    font-size: 22px;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    p {
      font-size: 18px;
    }
  }
`
const Value = styled.div`
  font-size: 16px;
  text-align: right;
  color: ${(props) => (props.color === "positivo" ? "green" : "red")};
`

const ListItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  color: #000000;
  margin-right: 10px;
  div span {
    color: #c6c6c6;
    margin-right: 10px;
  }
`