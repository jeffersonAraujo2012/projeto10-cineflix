import styled from "styled-components";

export default function Seat({ num, selected, isAvailable, onClick }) {
  return (
    <StyledSeat selected={selected} isAvailable={isAvailable} onClick={onClick}>
      {num}
    </StyledSeat>
  );
}

const StyledSeat = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  width: 26px;
  height: 26px;
  margin: 0 3px 18px;

  background: #c3cfd9;
  border: 1px solid #808f9d;

  cursor: pointer;

  ${(props) => {
    if (props.selected) {
      return `
      background: #1AAE9E;
      border: 1px solid #0E7D71;
      `;
    }
    if (props.isAvailable === false) {
      return `
      background: #FBE192;
      border: 1px solid #F7C52B;
      `;
    }
  }}

  border-radius: 100%;

  font-size: 11px;
  line-height: 13px;
  color: black;
`;
