import { Country } from "../types/types";
import { ResultsSearch } from "./ResultsSearch";

interface Props {
  results: Country[];
}
export const SearchResultList = ({ results }: Props) => {
  return (
    <div className=" mt-16 bg-slate-100 max-w-xs absolute">
      {results?.length >= 0
        ? results?.map((results, i) => {
            return <ResultsSearch results={results} key={i} />;
          })
        : "sin resultados"}
    </div>
  );
};
