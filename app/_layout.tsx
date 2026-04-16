import { SplashScreen, Stack } from "expo-router";
import "../global.css";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { View } from "react-native";
import Text from "@/components/Text";

const RootLayout = () => {
  const [loaded, error] = useFonts({
    "Flexo-Demi": require("../assets/fonts/Flexo-Demi.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) return null;

  return (
    <View style={{ flex: 1 }} className="flex flex-col">
      <View className="h-[60px] bg-[#ef5350] flex flex-row items-center px-[16px]">
        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
          Pokémon Battlegrounds
        </Text>
      </View>

      {/* Routes */}
      <Stack screenOptions={{ headerShown: false }} />
    </View>
  );
};

export default RootLayout;
