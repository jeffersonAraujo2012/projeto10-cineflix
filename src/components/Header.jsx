import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      CINEFLEX
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
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
`;
