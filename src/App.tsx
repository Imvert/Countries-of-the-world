import { Route, Routes } from "react-router-dom";
import CountryPage from "./pages/CountryPage";
import IndexPage from "./index";

function App() {
  //Punto de entrada principal que contiene el ruteo de la App
  return (
    <>
      <Routes>
        <Route path="/" index element={<IndexPage />} />
        <Route path="/countryPage/:name" element={<CountryPage />} />
      </Routes>
    <>
  );
}

export default App;
