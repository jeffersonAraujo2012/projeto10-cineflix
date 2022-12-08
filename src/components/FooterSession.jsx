import styled from "styled-components";
import CardMovie from "./Movies/CardMovie";

export default function FooterSession({ posterUrl, title, date = "" }) {
  return (
    <StyledFooterSession>
      <CardMovie posterUrl={posterUrl} alt={title} min />
      <p>{title}</p>
    </StyledFooterSession>
  );
}

const StyledFooterSession = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;

  display: flex;
  align-items: center;

  width: 100%;
  padding: 14px 0;
  min-height: 117px;

  background: #dfe6ed;
  border-top: 1px solid #9eadba;

  p {
    font-size: 26px;
    line-height: 30px;
    color: #293845;
  }
`;
