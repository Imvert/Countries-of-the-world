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
          <div className="h-full m-8 lg:ml-20 mt-5" key={i}>
            <button
              onClick={() => history.back()}
              className="rounded-full bg-blue-500 px-4 py-2"
            >
              Regresar
            </button>
            <h1 className="text-4xl text-center mb-8">{count?.name}</h1>
            <div className="flex flex-col md:flex-row" key={i}>
              <img
                className=" max-h-80 max-w-[640px]"
                src={count.flags.svg}
                alt={count.name}
              />
              <section className=" mt-5 lg:ml-64 sm:ml-20">
                <div className="flex space-x-1">
                  <p className="font-semibold text-lg">Región:</p>
                  <p className="text-lg">{count?.region}</p>
                </div>
                <div className="flex space-x-1">
                  <p className="font-semibold text-lg"> Subregión:</p>
                  <p className="text-lg">{count?.subregion}</p>
                </div>
                <div className="flex space-x-1 text-lg">
                  <p className="font-semibold text-lg"> Nombre completo:</p>
                  <p className="text-lg">
                    {count?.altSpellings?.[2] ?? "No tiene"}
                  </p>
                </div>
                <div className="flex space-x-1 text-lg">
                  <p className="font-semibold">Idioma:</p>
                  <p className="text-lg">{count?.languages?.[0]?.nativeName}</p>
                </div>
                <div className="flex space-x-1 text-lg">
                  <p className="font-semibold">Area:</p>
                  <p className="text-lg">{`${count?.area.toLocaleString()} km²`}</p>
                </div>
                <div className="flex space-x-1 text-lg">
                  <p className="font-semibold">Población:</p>
                  <p className="text-lg">
                    {count?.population.toLocaleString()}
                  </p>
                </div>
                <div className="flex space-x-1 text-lg">
                  <p className="font-semibold">Fronteras:</p>
                  <p className="text-lg">{`${count?.borders}`}</p>
                </div>
                <div className="flex space-x-1 text-lg">
                  <p className="font-semibold">latitud:</p>
                  <p className="text-lg">{count?.latlng?.[0].toPrecision(4)}</p>
                </div>
                <div className="flex space-x-1 text-lg">
                  <p className="font-semibold">longitud:</p>
                  <p className="text-lg">{count?.latlng?.[1].toPrecision(4)}</p>
                </div>
              </section>
            </div>
          </div>
        );
      })}
    </>
  );
}
