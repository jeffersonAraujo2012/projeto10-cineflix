import styled from "styled-components";

export default function PageTitle({ title }) {
  return <StyledPageTitle>{title}</StyledPageTitle>;
}

const StyledPageTitle = styled.p`
  height: 110px;

  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  
  display: flex;
  justify-content: center;
  align-items: center;

  color: #293845;
`;
