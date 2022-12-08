import "./css/reset.css";
import "./css/general.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Sessions from "./Pages/Sessions";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/sessoes/:idFilme" element={<Sessions />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
