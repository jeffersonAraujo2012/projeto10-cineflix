import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import PageTitle from "../components/PageTitle";
import Movies from "../components/Movies";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const promiseMovies = axios.get(
      "https://mock-api.driven.com.br/api/v8/cineflex/movies"
    );
    promiseMovies.then((res) => setMovies(res.data));
    promiseMovies.catch((e) => console.log(e));
  }, []);

  return (
    <>
      <PageTitle title="Selecione o filme" />
      <Movies movies={movies} />
    </>
  );
}

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  min-height: 100vh;
`;
