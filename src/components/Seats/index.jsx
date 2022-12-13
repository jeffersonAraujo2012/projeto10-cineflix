import { stripBasename } from "@remix-run/router";
import styled from "styled-components";
import LabelStatusSeats from "./LabelStatusSeats";
import Seat from "./Seat";

export default function Seats({
  seats,
  selectedsSeats,
  setSelectedsSeats,
  names,
  cpfs,
  setNames,
  setCpfs,
}) {
  console.log(names);
  function selectSeat(seat) {
    const index = selectedsSeats.indexOf(seat.id);
    const isSelected = index === -1 ? false : true;

    if (names[seat.id] === undefined && cpfs[seat.id] === undefined) {
      if (seat.isAvailable === true && !isSelected) {
        setSelectedsSeats([...selectedsSeats, seat.id]);
        return;
      }
      if (isSelected) {
        let novoSelectedsSeats = [...selectedsSeats];
        novoSelectedsSeats.splice(index, 1);
        setSelectedsSeats(novoSelectedsSeats);
        return;
      }
      if (seat.isAvailable === false) {
        alert("Esse assento não está disponível");
      }
    } else {
      const res = window.confirm(
        "Gostaria realmente de remover o assento e apagar os dados?"
      );
      if (res === true) {
        const index = selectedsSeats.indexOf(seat.id);
        const newNames = {...names};
        const newCpfs = {...cpfs};

        newNames[seat.id] = undefined;
        newCpfs[seat.id] = undefined;

        let novoSelectedsSeats = [...selectedsSeats];
        novoSelectedsSeats.splice(index, 1);

        setSelectedsSeats(novoSelectedsSeats);
        setNames(newNames);
        setCpfs(newCpfs);
      }
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
  justify-content: center;

  width: 100%;
  padding: 0 21px;
`;
