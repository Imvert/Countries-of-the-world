import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchCountry } from "../services/fetchCountries";

export default function CountryPage() {
  const params = useParams();
  const { name }: { name: string } = params;

  async function getCountry() {
    const data = await fetchCountry(name);
    console.log(data);
  }

  useEffect(() => {
    getCountry();
  }, []);

  return <h1>{`country name ${name} `}</h1>;
}
