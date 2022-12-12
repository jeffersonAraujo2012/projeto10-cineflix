import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import PageTitle from "../components/PageTitle";
import Movies from "../components/Movies";
import Loading from "../components/Loading";

export default function Home() {
  const [movies, setMovies] = useState(undefined);

  useEffect(() => {
    const promiseMovies = axios.get(
      "https://mock-api.driven.com.br/api/v8/cineflex/movies"
    );
    promiseMovies.then((res) => setMovies(res.data));
    promiseMovies.catch((e) => console.log(e));
  }, []);

  if (!movies) return <Loading />;

  return (
    <StyledHome>
      <PageTitle title="Selecione o filme" />
      <Movies movies={movies} />
    </StyledHome>
  );
}

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  min-height: 100vh;
`;
