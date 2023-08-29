import { useEffect, useState } from "react";
import { SearchBar } from "./components/SearchBar";
import { fetchAllCountries } from "./services/fetchCountries";
import { Country } from "./types/types";
import CountryCard from "./components/CountryCard";
import { SearchResultList } from "./components/SearchResultList";

function Index() {
  const [countries, setCountries] = useState<Country[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [country, setCountry] = useState<Country[]>([]);

  async function peticion() {
    const data = await fetchAllCountries();
    setCountries(data);
  }
  useEffect(() => {
    peticion();
  }, []);

  return (
    <div className="flex flex-col ml-10">
      <h1 className="text-3xl text-blue-400 text-center font-bold">
        Paises del mundo
      </h1>
      <SearchBar setResults={setCountry} />
      {country ? <SearchResultList results={country} /> : ""}
      <div className="pb-5 flex-row">
        <CountryCard countries={countries} />
      </div>
    </div>
  );
}

export default Index;
