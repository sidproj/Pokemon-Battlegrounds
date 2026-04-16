import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PokemonsList from "../components/PokemonsList";

const App = () => {
  return (
    <SafeAreaView>
      <View className="w-full flex flex-col items-center p-4">
        <PokemonsList />
        </View>
    </SafeAreaView>
  );
};

export default App;