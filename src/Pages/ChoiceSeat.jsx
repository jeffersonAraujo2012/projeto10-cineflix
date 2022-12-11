import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import FooterSession from "../components/FooterSession";
import PageTitle from "../components/PageTitle";
import Seats from "../components/Seats";

export default function ChoiceSeat() {
  const { idSessao } = useParams();
  const [selectedsSeats, setSelectedsSeats] = useState([]);
  const [session, setSession] = useState(undefined);
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const sessionPromise = axios.get(
      `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`
    );
    sessionPromise.then((res) => setSession(res.data));
    sessionPromise.catch((e) => console.log(e));
  }, []);

  function confirmReservation(e) {
    e.preventDefault();
    const reservation = {
      ids: selectedsSeats,
      name: name,
      cpf: cpf,
    };

    axios
      .post(
        "https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many",
        reservation
      )
      .then((res) => navigate("/sucesso"));
  }

  if (!session) return "Loading...";

  return (
    <StyledChoiceSeat>
      <PageTitle title="Selecione o(s) assento(s)" />

      <Seats
        seats={session.seats}
        selectedsSeats={selectedsSeats}
        setSelectedsSeats={setSelectedsSeats}
      />
      <Dados onSubmit={confirmReservation}>
        <p>Nome do comprador:</p>
        <input
          type="text"
          placeholder="Digite seu nome..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <p>CPF do comprador:</p>
        <input
          type="number"
          placeholder="Digite seu CPF..."
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          required
        />

        <button>Reservar assento(s)</button>
      </Dados>

      <FooterSession
        posterUrl={session.movie.posterURL}
        title={session.movie.title}
        date={session.day.weekday + " - " + session.name}
      />
    </StyledChoiceSeat>
  );
}

const StyledChoiceSeat = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  min-height: calc(100vh - 70px); //Estou tirando o tamanho do header
`;

const Dados = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  padding: 0 24px;

  p {
    height: 25px;

    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;

    color: #293845;
  }

  input {
    height: 51px;
    padding-left: 16px;
    margin-bottom: 8px;

    font-size: 18px;
    line-height: 21px;
    color: #293845;

    border: 1px solid #d5d5d5;
    border-radius: 3px;
  }

  input::placeholder {
    height: 50px;

    font-style: italic;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;

    color: #afafaf;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;

    width: 225px;
    height: 42px;
    margin-top: 25px;

    background: #e8833a;
    border: none;
    border-radius: 3px;

    font-size: 18px;
    line-height: 21px;
    color: #ffffff;

    cursor: pointer;
  }
`;
