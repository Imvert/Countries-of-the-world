import { Country } from "../types/types";
import { useNavigate } from "react-router-dom";

interface Props {
  results: Country;
}

export const ResultsSearch = ({ results }: Props) => {
  const navigate = useNavigate();

  function handleRedirect() {
    navigate(`/countryPage/${results?.name}`);
  }
  return (
    <div className="mt-2 ml-2 ">
      {
        <p onClick={handleRedirect} className="text-black hover:bg-slate-400">
          {results?.name}
        </p>
      }
    </div>
  );
};
