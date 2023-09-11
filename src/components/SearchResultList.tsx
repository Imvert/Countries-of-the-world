import { Country } from "../types/types";
import { ResultsSearch } from "./ResultsSearch";

interface Props {
  results: Country[];
}
export const SearchResultList = ({ results }: Props) => {
  return (
    <div className="lg:ml-10 sm:ml-56 ml-24 rounded mt-[78px] pr-2 bg-slate-300 max-h-[256px] min-h-[auto]  min-w-[230px] max-w-[230px] absolute overflow-auto ">
      {results?.length >= 0
        ? results?.map((results, i) => {
            return <ResultsSearch results={results} key={i} />;
          })
        : "sin resultados"}
    </div>
  );
};
