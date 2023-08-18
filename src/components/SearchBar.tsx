/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, Dispatch, SetStateAction } from "react";
import { fetchCountry } from "../services/fetchCountries";
import { Country } from "../types/types";

interface Props {
  setResults: Dispatch<SetStateAction<Country[]>>;
}

export const SearchBar = ({ setResults }: Props) => {
  const [text, setText] = useState("");

  //get the country for search by de function
  const fetchData = async (value: string) => {
    const countries = await fetchCountry(value);
    setResults(countries);
  };

  //change the search when change the input
  const handleChange = (value: string) => {
    setText(value);
    fetchData(value);
  };

  return (
    <div className="max-w-sm">
      <input
        type="text"
        className="border-solid border-black border-2 rounded"
        value={text}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Busque un pais ..."
      />
    </div>
  );
};
