import { Country } from "../types/types";
import { useNavigate } from "react-router-dom";

interface Props {
  countries: Country[];
  pagina: number;
}

export default function CountryCard({ countries, pagina }: Props) {
  const navigate = useNavigate();
  const porPagina = 15;

  return (
    <div className="pb-5 mt-5 mr-10 grid lg:grid-cols-3 gap-8 sm:grid-cols-2 hover:cursor-pointer">
      {countries
        ?.slice((pagina - 1) * porPagina, (pagina - 1) * porPagina + porPagina)
        ?.map((country: Country, i: number) => {
          return (
            <div
              onClick={() => navigate(`/countryPage/${country?.name}`)}
              className=" min-w-[290px] min-h-[377px] max-w-[320px] pb-2 bg-white  m-auto rounded border-solid border-black/60 border-2"
              key={i}
            >
              <div className="bg-[#8099db] h-14">
                <h1 className=" text-center uppercase font-semibold pt-3">
                  {country?.name}
                </h1>
              </div>

              <div className="rounded">
                <img
                  loading="lazy"
                  className="object-fill min-h-[213px] max-h-[213px]min-w-[320px]  border-b-2 border-slate-500"
                  src={`${country?.flags?.png}`}
                  alt={`Bandera de ${country?.name}`}
                />
              </div>

              <p className="text-center">{country?.alpha2Code}</p>
              <div className=" gap-1 pl-2">
                <div className="flex space-x-1">
                  <p className="font-semibold">Continente: </p>
                  <p> {country?.region}</p>
                </div>
                <div className="flex space-x-1">
                  <p className="font-semibold">Capital: </p>
                  <p> {country?.capital}</p>
                </div>
                <div className="flex space-x-1">
                  <p className="font-semibold">Idioma: </p>
                  <p>{country?.languages?.[0]?.name}</p>
                </div>
                <div className="flex space-x-1">
                  <p className="font-semibold">Población:</p>
                  <p>{country?.population.toLocaleString()}</p>
                </div>
                <div className="flex space-x-1">
                  <p className="font-semibold"> Divisa:</p>
                  <p>
                    {` ${country?.currencies?.[0]?.name ?? "sin divisa"} - ${
                      country?.currencies?.[0]?.code ?? "sin divisa"
                    } `}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
