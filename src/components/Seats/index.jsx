import styled from "styled-components";
import LabelStatusSeats from "./LabelStatusSeats";
import Seat from "./Seat";

export default function Seats({ seats, selectedsSeats, setSelectedsSeats }) {
  function selectSeat(seat) {
    const index = selectedsSeats.indexOf(seat.id);
    const isSelected = index === -1 ? false : true;

    if (seat.isAvailable === true && !isSelected) {
      setSelectedsSeats([...selectedsSeats, seat.id]);
    }
    if (isSelected) {
      let novoSelectedsSeats = [...selectedsSeats];
      novoSelectedsSeats.splice(index, 1);
      setSelectedsSeats(novoSelectedsSeats);
    }
  }
  return (
    <>
      <StyledSeats>
        {seats.map((seat) => {
          return (
            <Seat
              num={seat.name}
              onClick={() => selectSeat(seat)}
              isAvailable={seat.isAvailable}
              selected={selectedsSeats.includes(seat.id) ? true : false}
              key={seat.id}
            />
          );
        })}
      </StyledSeats>
      <LabelStatusSeats />
    </>
  );
}

const StyledSeats = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  padding: 0 21px;
`;
