import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import arrowBack from "../assets/image/arrowBack.svg";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <StyledHeader>
      {location.pathname !== "/" && (
        <button onClick={() => navigate(-1)} data-test="go-home-header-btn">
          <img src={arrowBack} alt="voltar à pagina anterior" />
        </button>
      )}
      CINEFLEX
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 70px;

  background-color: #c3cfd9;

  font-weight: 400;
  font-size: 34px;
  line-height: 40px;
  color: #e8833a;

  button {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 5px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    background-color: inherit;
    cursor: pointer;
  }
`;
