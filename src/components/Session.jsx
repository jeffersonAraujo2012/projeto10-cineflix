import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Session({date, schedule}) {
  return (
    <StyledSession>
      <p>{date}</p>
      <div>
        {schedule.map(time => {
          return <Link to={`/assentos/${time.id}`}>{time.name}</Link>
        })}
      </div>
    </StyledSession>
  );
}

const StyledSession = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-bottom: 24px;
  margin-left: 24px;

  p {
    height: 35px;
    margin-bottom: 22px;

    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;

    color: #293845;
  }

  div {
    display: flex;
  }

  div > a {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 83px;
    height: 43px;
    margin-right: 8px; 

    background: #e8833a;
    border: none;
    border-radius: 3px;

    font-size: 18px;
    line-height: 21px;
    text-decoration: none;
    color: white;
  }
`;
