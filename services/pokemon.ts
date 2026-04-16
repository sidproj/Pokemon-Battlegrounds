const BASE_URL = "https://pokeapi.co/api/v2/";

interface FetchInterface {
  url?: string;
  setState?: React.Dispatch<
    React.SetStateAction<any>
  >;
}

export const fetchPokemons = async ({ url, setState }: FetchInterface) => {
  const new_url = url || BASE_URL + "pokemon?limit=30";

  const res = await fetch(new_url);
  const data = await res.json();
  if (setState) {
    setState((old:any) => {
      if (!old) return data;
      if (url) {
        return {
          ...data,
          results: [...old.results, ...data.results],
        };
      }
      return data;
    });
  }
  return data;
};

export const fetchSinglePokemon = async ({ url, setState }: FetchInterface) => {
  const new_url = url ?? "";
  const res = await fetch(new_url);
  const data = await res.json();
  if(setState && data){
    setState(data);
  }

};
