/* eslint-disable react-hooks/exhaustive-deps */
import { Params, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchCountry } from "../services/fetchCountries";
import { Country } from "../types/types";

export default function CountryPage() {
  const params = useParams();
  const { name }: Readonly<Params<string>> = params;

  const [country, setCountry] = useState<Country[]>([]);

  async function getCountry() {
    const data = await fetchCountry(name);
    setCountry(data);
  }

  useEffect(() => {
    getCountry();
  }, []);

  return (
    <>
      {country.map((count: Country, i: number) => {
        return (
          <div className="h-full m-8 ml-20 mt-20" key={i}>
            <h1 className="text-4xl text-center mb-8">{count?.name}</h1>
            <div className="flex" key={i}>
              <img
                className="max-w-full max-h-80"
                src={count.flags.svg}
                alt={count.name}
              />
              <section className="flex-grow ml-64 ">
                <div className="flex space-x-1">
                  <p className="font-semibold">Región:</p>
                  <p>{count?.region}</p>
                </div>
                <div className="flex space-x-1">
                  <p className="font-semibold"> Subregión:</p>
                  <p>{count?.subregion}</p>
                </div>
                <div className="flex space-x-1">
                  <p className="font-semibold">Pronunciacion:</p>
                  <p>{count?.altSpellings?.[2] ?? "No tiene"}</p>
                </div>
                <div className="flex space-x-1">
                  <p className="font-semibold">Población:</p>
                  <p>{count?.population.toLocaleString()}</p>
                </div>
                <div className="flex space-x-1">
                  <p className="font-semibold">latitud:</p>
                  <p>{count?.latlng?.[0].toPrecision(4)}</p>
                </div>
                <div className="flex space-x-1">
                  <p className="font-semibold">longitud:</p>
                  <p>{count?.latlng?.[1].toPrecision(4)}</p>
                </div>
              </section>
            </div>
          </div>
        );
      })}
    </>
  );
}
