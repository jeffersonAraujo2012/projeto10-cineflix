import styled from "styled-components";

export default function CardMovie({ posterUrl, alt }) {
  return (
    <StyledCardMovie>
      <img src={posterUrl} alt={alt} />
    </StyledCardMovie>
  );
}

const StyledCardMovie = styled.div`
  width: 145px;
  height: 209px;
  padding: 8px;
  margin: 0 15px 12px;

  background: #ffffff;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;

  img {
    min-height: 100%;
    width: 100%;
  }
`;
