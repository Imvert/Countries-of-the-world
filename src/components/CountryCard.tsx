import { Country } from "../types/types";

interface Props {
  countries: Country[];
}

export default function CountryCard({ countries }: Props) {
  return (
    <div>
      <div className="pb-5 mt-10 grid grid-cols-3 gap-8 ">
        {countries?.map((country: Country, i: number) => {
          return (
            <div
              className="min-w-[290px] min-h-[377px] pb-2 m-auto rounded border-solid border-red-700 border-2"
              key={i}
            >
              <h1 className="text-center uppercase m-2">{country?.name}</h1>
              <div className="rounded">
                <img
                  className="object-fill max-w-[320px] max-h-[213px] min-w-[320px] min-h-[213px]"
                  src={`${country.flags.png}`}
                  alt={`Bandera de ${country?.name}`}
                />
              </div>

              <p className="text-center">{country?.alpha2Code}</p>
              <div className=" gap-1 pl-2">
                <p>Capital: {country?.capital}</p>
                <p>Lenguaje: {country?.languages?.[0]?.name}</p>
                <p>Poblacion: {country?.population}</p>
                <p>
                  Divisa:
                  {` ${country?.currencies?.[0]?.name ?? "sin divisa"} - ${
                    country?.currencies?.[0]?.code ?? "sin divisa"
                  } `}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
