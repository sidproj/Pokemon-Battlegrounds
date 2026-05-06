import { fetchspeciesDetails } from "@/services/pokemon";
import { useEffect, useState } from "react";
import { View } from "react-native";
import Text from "./Text";
import { getPokemonDescription } from "@/utility";

interface Props {
  speciesId: string;
}

const PokemonDescription = ({ speciesId }: Props) => {
  const [species, setSpecies] = useState<any>();

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon-species/${speciesId}`;
    fetchspeciesDetails({ url, setState: setSpecies });
  }, []);

  if (!species) {
    return null;
  }
 
  return (
    <View>
      <Text>{getPokemonDescription(species)}</Text>
    </View>
  );
};

export default PokemonDescription;
