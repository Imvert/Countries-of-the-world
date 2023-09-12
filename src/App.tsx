import { Route, Routes } from "react-router-dom";
import CountryPage from "./pages/CountryPage";
import IndexPage from "./index";

function App() {
  //Punto de entrada principal que contiene el ruteo de la App
  return (
    <div>
      <Routes>
        <Route index element={<IndexPage />} />
        <Route path="/countryPage/:name" element={<CountryPage />} />
      </Routes>
    </div>
  );
}

export default App;
