import Image from "@/components/Image";
import PokemonDescription from "@/components/PokemonDescription";
import Text from "@/components/Text";
import TypePill from "@/components/TypePill";
import { BASE_API } from "@/constants/API";
import { fetchSinglePokemon } from "@/services/pokemon";
import { PokemonTypeName } from "@/types";
import {
  formatPokedexId,
  getColorsFromImg,
  getPokemonDescription,
} from "@/utility";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

const DetailedPokemon = () => {
  const { id }: { id: string } = useLocalSearchParams();

  const [pokemon, setPokemon] = useState<any>();
  const [bgColor, setBgColor] = useState<string>();

  const imageSrc = pokemon?.sprites.other["official-artwork"].front_default;

  useEffect(() => {
    if (id) {
      const url = BASE_API + `pokemon/${id}/`;
      fetchSinglePokemon({ url, setState: setPokemon });
    }
  }, []);

  useEffect(() => {
    if (imageSrc && !bgColor) {
      getColorsFromImg(imageSrc, setBgColor);
    }
  }, [imageSrc, bgColor]);

  const types: PokemonTypeName[] =
    pokemon?.types.map((t: any) => t.type.name) || [];

  if (!pokemon) {
    return <ActivityIndicator color={"#ef5350"} size="large" />;
  }

  return (
    <View
      className="flex flex-row w-full justify-between items-center p-4"
      style={{ backgroundColor: bgColor }}
    >
      <View className="flex flex-col gap-2 w-[30%]">
        <Text className="text-[32px] capitalize">{pokemon.name}</Text>
        <View className="flex flex-row gap-2 items-center">
          <Text className="text-[24px] ">#{formatPokedexId(id)}</Text>
          <View className="flex flex-row justify-center gap-2 w-full h-fit">
            {types.map((type: PokemonTypeName) => (
              <TypePill type={type} key={type} isOne={types.length === 1} />
            ))}
          </View>
        </View>
        <PokemonDescription speciesId={id} />
      </View>
      <Image src={imageSrc} height={500} width={500} alt={pokemon.name} />
    </View>
  );
};

export default DetailedPokemon;
