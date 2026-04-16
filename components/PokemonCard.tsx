import { useEffect, useState } from "react";

import { FontAwesome } from "@expo/vector-icons";
import { PokemonTypeName } from "@/types";
import Image from "./Image";
import PokemonCardSkeleton from "./PokemonCardSkeleton";
import { TEXT_COLOR } from "@/constants/UI";
import TypePill from "./TypePill";
import { fetchSinglePokemon } from "@/services/pokemon";
import { formatPokedexId, getColorsFromImg, lightenColor } from "@/utility";
import { Pressable, View } from "react-native";
import Text from "./Text";

interface Props {
  name: string;
  url: string;
}

const PokemonCard = (props: Props) => {
  const { name, url } = props;
  const [data, setData] = useState<any>();
  const [bgColor, setBgColor] = useState<string>();

  const imageSrc = data?.sprites.other["official-artwork"].front_default;

  useEffect(() => {
    fetchSinglePokemon({ url, setState: setData });
  }, [url]);

  useEffect(() => {
    if (imageSrc && !bgColor) {
      getColorsFromImg(imageSrc, setBgColor);
    }
  }, [imageSrc, bgColor]);

  const types: PokemonTypeName[] =
    data?.types.map((t: any) => t.type.name) || [];
  const id = url.split("/")[6];

  if (!data) return <PokemonCardSkeleton />;

  return (
    <Pressable
      className="rounded-lg pr-4 pl-0 cursor-pointer hover:animate-pulse hover:scale-95 duration-150 ease-out"
      style={{
        backgroundColor: bgColor,
        flex: 1,
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
      }}
    >
      <View className="flex flex-row gap-4">
        <View className="px-2 rounded-r-full bg-[#ffffff70] py-1 justify-center">
          <Image src={imageSrc} alt={name} width={80} height={80} />
        </View>
        <View className="flex flex-col gap-2 w-full py-4">
          <View className="flex flex-row items-center gap-4 text-lg font-semibold capitalize">
            <Text style={{ color: TEXT_COLOR }}>#{formatPokedexId(id)}</Text>
            <Text style={{ color: TEXT_COLOR }} className="truncate">
              {name}
            </Text>
            <FontAwesome
              fill={TEXT_COLOR}
              className="ml-auto hover:scale-130 duration-200"
              size={20}
            />
          </View>

          <View className="flex flex-row gap-2 w-full">
            {types.map((type: PokemonTypeName) => (
              <TypePill type={type} key={type} />
            ))}
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default PokemonCard;
