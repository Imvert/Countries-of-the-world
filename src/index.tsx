import { useEffect, useState } from "react";
import { SearchBar } from "./components/SearchBar";
import { fetchAllCountries } from "./services/fetchCountries";
import { Country } from "./types/types";
import CountryCard from "./components/CountryCard";
import { SearchResultList } from "./components/SearchResultList";
import "./styles.css";
import { Paginacion } from "./components/Paginacion";

function Index() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [country, setCountry] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [pagina, setPagina] = useState(1);

  const maximo = countries.length / 15;

  async function peticion() {
    const data = await fetchAllCountries();
    setCountries(data);

    setLoading(false);
  }
  useEffect(() => {
    peticion();
  }, []);

  return (
    <div className="flex flex-col ml-10">
      <h1 className="text-3xl text-gray-600 text-center font-bold">
        Paises del mundo
      </h1>
      <SearchBar setResults={setCountry} />
      <div className="mt-4 mr-10">
        {!loading ? (
          <Paginacion setPagina={setPagina} pagina={pagina} maximo={maximo} />
        ) : (
          ""
        )}
      </div>

      {country ? <SearchResultList results={country} /> : ""}
      <div className=" flex-row">
        {loading ? (
          <span className="loader"></span>
        ) : (
          <CountryCard countries={countries} pagina={pagina} />
        )}
      </div>
    </div>
  );
}

export default Index;
