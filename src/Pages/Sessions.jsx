import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import FooterSession from "../components/FooterSession";
import Loading from "../components/Loading";

import PageTitle from "../components/PageTitle";
import Session from "../components/Session";

export default function Sessions() {
  const { idFilme } = useParams();
  const [sessions, setSessions] = useState(undefined);

  useEffect(() => {
    const sessionsPromise = axios.get(
      `https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`
    );
    sessionsPromise.then((res) => setSessions(res.data));
    sessionsPromise.catch((e) => console.log(e));
  }, []);

  if (!sessions) {
    return <Loading />;
  }

  return (
    <StyledSessions>
      <PageTitle title="Selecione o horário" />

      {sessions.days.map((session) => {
        return (
          <Session
            date={session.weekday + " - " + session.date}
            schedule={session.showtimes}
            key={session.id}
          />
        );
      })}

      <FooterSession posterUrl={sessions.posterURL} title={sessions.title} />
    </StyledSessions>
  );
}

const StyledSessions = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  min-height: 100vh;
  margin-bottom: 117px;
`;
