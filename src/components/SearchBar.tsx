/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, Dispatch, SetStateAction, useCallback } from "react";
import { fetchCountry } from "../services/fetchCountries";
import { Country } from "../types/types";
import debounce from "just-debounce-it";

interface Props {
  setResults: Dispatch<SetStateAction<Country[]>>;
}

export const SearchBar = ({ setResults }: Props) => {
  const [text, setText] = useState("");

  //espera 300 milisegundos para hacer la peticion a la api
  const debounceGetCountry = useCallback(
    debounce(async (value: string) => {
      const countries = await fetchCountry(value);
      setResults(countries);
    }, 300),
    [fetchCountry]
  );

  //change the search when change the input
  const handleChange = (value: string) => {
    setText(value);
    debounceGetCountry(value);
  };

  return (
    
      <input
        size={26}
        type="text"
        className="border-solid border-black border-2 rounded"
        value={text}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Busque un pais ..."
      />

  );
};
