import { View } from "react-native";

const PokemonCardSkeleton = () => {
  return (
    <View className="bg-[#f8f8f8f6] flex-1 shadow-md rounded-lg">
      <View className="flex flex-row gap-4 w-full">
        <View className="flex w-[96px] h-[88px] bg-gray-200 animate-pulse rounded rounded-r-full"></View>
        <View className="flex flex-col gap-2 w-[calc(100%-112px)] p-4 pl-0">
          <View className="w-full h-5 bg-gray-200 animate-pulse rounded"></View>
          <View className="w-full h-5 bg-gray-200 animate-pulse rounded"></View>
        </View>
      </View>
    </View>
  );
};

export default PokemonCardSkeleton;
