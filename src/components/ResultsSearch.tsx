import { Country } from "../types/types";

interface Props {
  results: Country;
}

export const ResultsSearch = ({ results }: Props) => {
  return (
    <div className="m-3">
      {
        <div>
          <p className="text-black hover:bg-slate-300">{results?.name}</p>
        </div>
      }
    </div>
  );
};
