import { Country } from "../types/types";

const BASE_URL = "https://restcountries.com/v2";

async function request<Response>(
  url: string,
  config: RequestInit = {}
): Promise<Response> {
  return fetch(url, config)
    .then((response) => {
      if (response.ok) return response;
      throw new Error(`Error ${response.status}`);
    })
    .then((response) => response.json())
    .then((data) => data as Response);
}

export const fetchAllCountries = async () => {
  const data = await request<Country[]>(BASE_URL + "/all");
  return data;
};


//verificar como devolver de direfentes formar
export const fetchCountry = async (
  country: string | undefined
): Promise<any> => {
  try {
    if (country === "") {
      return;
    } else {
      const data = await request<Country[]>(BASE_URL + "/name/" + country);
      return data;
    }
  } catch (error) {
    return error;
  }
};
