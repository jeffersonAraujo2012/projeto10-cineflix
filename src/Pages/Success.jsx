import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PageTitle from "../components/PageTitle";

export default function Success({ reservation }) {
  const navigate = useNavigate();

  function goToHome() {
    navigate("/");
  }

  return (
    <StyledSuccess>
      <PageTitle success title="Pedido feito com sucesso!" />
      <div>
        <h2>Filme e sessão</h2>
        <p>{reservation.session.movie.title}</p>
        <p>
          {reservation.session.day.date}&nbsp;{reservation.session.name}
        </p>
      </div>

      <div>
        <h2>Ingressos</h2>
        {reservation.ids.map((seatId) => {
          const [seat] = reservation.session.seats.filter(
            (s) => s.id === seatId
          );
          console.log(seat);
          return <p key={seat}>assento {seat.name}</p>;
        })}
      </div>

      <div>
        <h2>Comprador</h2>
        <p>Nome: {reservation.name}</p>
        <p>CPF: {reservation.cpf}</p>
      </div>

      <button onClick={goToHome}>Voltar pra Home</button>
    </StyledSuccess>
  );
}

const StyledSuccess = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  min-height: 100vh;
  margin-bottom: 117px;
  padding: 0 28px;

  h2 {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #293845;

    display: flex;
    align-items: center;

    margin-bottom: 10px;
  }

  p {
    font-size: 22px;
    line-height: 26px;
    display: flex;
    align-items: center;

    color: #293845;
  }

  div {
    margin-bottom: 40px;
  }

  button {
    display: flex;
    align-items: center;
    align-self: center;

    width: 225px;
    height: 42px;

    background: #e8833a;
    border-radius: 3px;
    border: none;

    font-size: 18px;
    line-height: 21px;
    justify-content: center;
    color: #ffffff;

    cursor: pointer;
  }
`;
