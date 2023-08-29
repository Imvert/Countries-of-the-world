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

export const fetchCountry = async (country: string) => {
  try {
    if (country === "") {
      return null;
    } else {
      const data = await request<Country[]>(BASE_URL + "/name/" + country);
      return country && data;
    }
  } catch (error) {
    return error;
  }
};
