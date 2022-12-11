import "./css/reset.css";
import "./css/general.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Sessions from "./Pages/Sessions";
import ChoiceSeat from "./Pages/ChoiceSeat";
import Success from "./Pages/Success";
import { useState } from "react";

function App() {
  const [reservation, setReservation] = useState(undefined);

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sessoes/:idFilme" element={<Sessions />} />
          <Route
            path="/assentos/:idSessao"
            element={<ChoiceSeat setReservation={setReservation} />}
          />
          <Route
            path="/sucesso"
            element={<Success reservation={reservation} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
