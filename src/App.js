import "./css/reset.css";
import "./css/general.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Sessions from "./Pages/Sessions";
import ChoiceSeat from "./Pages/ChoiceSeat";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/sessoes/:idFilme" element={<Sessions />}/>
          <Route path="/assentos/:idSessao" element={<ChoiceSeat />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
