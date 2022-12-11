import styled from "styled-components";

export default function PageTitle({ title, success }) {
  return <StyledPageTitle success={success}>{title}</StyledPageTitle>;
}

const StyledPageTitle = styled.h1`
  ${props => props.success && "width: 180px"};
  height: 110px;

  font-weight: ${(props) => (props.success ? 700 : 400)};
  font-size: 24px;
  line-height: 28px;

  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  text-align: center;

  color: ${(props) => (props.success ? "#247a6b" : "#293845")};
`;
