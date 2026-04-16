import { TEXT_COLOR } from "@/constants/UI";
import type { PokemonTypeName } from "../types";
import { View } from "react-native";
import Text from "./Text";


interface Props {
  type: PokemonTypeName;
  isOne?:boolean;
}

const TypePill = ({ type, isOne }: Props) => {
  const width = isOne ? "w-full" : "w-[49%]"
  return (
    <View
      className={`border-2 ${width} text-center rounded`}
      style={{ borderColor: TEXT_COLOR }}
    >
      <Text className="text-center pt-[1px]" style={{color: TEXT_COLOR,}}>{type.toUpperCase()}</Text>
    </View>
  );
};

export default TypePill;
