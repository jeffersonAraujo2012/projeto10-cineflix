import { Link } from "react-router-dom";
import styled from "styled-components";

import CardMovie from "./CardMovie";

export default function Movies({ movies }) {
  return (
    <StyledMovies>
      {movies.map((movie, index) => {
        return (
          <Link to={`/sessoes/${movie.id}`} key={index}>
            <CardMovie posterUrl={movie.posterURL} alt={movie.title} />
          </Link>
        );
      })}
    </StyledMovies>
  );
}

const StyledMovies = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  margin-bottom: 18px;
`;
