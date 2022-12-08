import styled from "styled-components";

export default function CardMovie({ posterUrl, alt, min }) {
  return (
    <StyledCardMovie min={min}>
      <img src={posterUrl} alt={alt} />
    </StyledCardMovie>
  );
}

const StyledCardMovie = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  
  width: ${props => props.min ? "64px" : "145px"};
  min-height: ${props => props.min ? "89px" : "209px"};
  padding: 8px;
  margin: ${props => props.min ? "0 15px" : "0 15px 12px"};

  background: #ffffff;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;

  img {
    min-height: 100%;
    width: 100%;
  }
`;
