import styled from "styled-components";

export default function LabelStatusSeats() {
  return (
    <StyledLabelStatusSeats>
      <div>
        <div></div>
        <span>Selecionado</span>
      </div>
      <div>
        <div></div>
        <span>Disponível</span>
      </div>
      <div>
        <div></div>
        <span>Indisponível</span>
      </div>
    </StyledLabelStatusSeats>
  );
}

const StyledLabelStatusSeats = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;

  margin-bottom: 42px;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  & > div > div {
    width: 25px;
    height: 25px;

    border-radius: 100%;
  }

  & > div:nth-child(1) > div {
    background: #1aae9e;
    border: 1px solid #0e7d71;
  }

  & > div:nth-child(2) > div {
    background: #c3cfd9;
    border: 1px solid #7b8b99;
  }

  & > div:nth-child(3) > div {
    background: #fbe192;
    border: 1px solid #f7c52b;
  }

  span {
    height: 28px;

    font-size: 13px;
    line-height: 15px;
    display: flex;
    align-items: center;

    color: #4e5a65;
  }
`;
