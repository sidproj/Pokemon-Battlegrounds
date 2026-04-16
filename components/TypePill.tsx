import { TEXT_COLOR } from "@/constants/UI";
import type { PokemonTypeName } from "../types";
import { View } from "react-native";
import Text from "./Text";


interface Props {
  type: PokemonTypeName;
}

const TypePill = ({ type }: Props) => {
  return (
    <View
      className={`border-2! w-full! text-center! rounded!`}
      style={{ borderColor: TEXT_COLOR }}
    >
      <Text style={{color: TEXT_COLOR,}}>{type.toUpperCase()}</Text>
    </View>
  );
};

export default TypePill;
