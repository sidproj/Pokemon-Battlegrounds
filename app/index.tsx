import Text from "@/components/Text";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TEXT_COLOR } from "@/constants/UI";
import PokemonsListPage from "../components/PokemonsListPage";

const App = () => {
  return (
    <SafeAreaView>
      <View className="w-full flex flex-col items-center">
        <Text className="font-bold text-5xl py-5" style={{color:TEXT_COLOR}}>PokéDex</Text>
        <PokemonsListPage />
        </View>
    </SafeAreaView>
  );
};

export default App;