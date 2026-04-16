import { useEffect, useState } from "react";
import type { PokemonsInterface } from "../types";
import { fetchPokemons } from "@/services/pokemon";
import PokemonCard from "@/components/PokemonCard";
import Button from "@/components/Button";
import {
  ActivityIndicator,
  FlatList,
  useWindowDimensions,
  View,
} from "react-native";

const PokemonsListPage = () => {
  const { width } = useWindowDimensions();
  const [pokemonList, setPokemonList] = useState<PokemonsInterface>();
  const [loading, setLoading] = useState<boolean>(false);

  const numColumns = width >= 1024 ? 3 : width >= 768 ? 2 : 1;

  useEffect(() => {
    fetchPokemons({ setState: setPokemonList });
  }, []);

  const handleLoadMore = async () => {
    setLoading(true);
    const nextUrl = pokemonList?.next;
    await fetchPokemons({ url: nextUrl, setState: setPokemonList });
    setLoading(false);
  };

  return (
    <View className="flex-1 w-full max-h-[88vh] overflow-y-auto">
      <FlatList
        key={numColumns}
        numColumns={numColumns}
        style={{ width: "100%" }}
        data={pokemonList?.results}
        keyExtractor={(pokemon) => pokemon.name}
        onEndReached={handleLoadMore}
        initialNumToRender={20}
        contentContainerStyle={{ gap: 12, padding: 10, width: "100%" }}
        columnWrapperStyle={
          numColumns > 1 ? { gap: 12, width: "100%" } : undefined
        }
        renderItem={({ item }) => (
          <PokemonCard name={item.name} url={item.url} />
        )}
        ListFooterComponent={
          loading ? <ActivityIndicator size="large" /> : null
        }
      />
    </View>
  );
};

export default PokemonsListPage;
