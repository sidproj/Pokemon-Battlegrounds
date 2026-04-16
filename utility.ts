import { getColors } from "react-native-image-colors";

export const formatPokedexId = (id: string): string => {
  return id.padStart(3, "0");
};

export function lightenColor(hex: string, percent: number) {
  if (!hex) return hex;

  // Remove #
  hex = hex.replace("#", "");

  // Support shorthand (#fff)
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((c) => c + c)
      .join("");
  }

  const num = parseInt(hex, 16);

  let r = (num >> 16) & 255;
  let g = (num >> 8) & 255;
  let b = num & 255;

  r = Math.min(255, r + (255 - r) * percent);
  g = Math.min(255, g + (255 - g) * percent);
  b = Math.min(255, b + (255 - b) * percent);

  const toHex = (c: number) => {
    const hex = Math.round(c).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

export const getColorsFromImg = async (
  url: string,
  setState: React.Dispatch<React.SetStateAction<string | undefined>>,
) => {
  const result = await getColors(url);
  let color = "";
  switch (result.platform) {
    case "android":
      color = result.dominant;
      break;
    case "web":
      color = result.lightVibrant;
      break;
    case "ios":
      color = result.primary;
      break;
    default:
      color = "#ccc";
      break;
  }
  setState(lightenColor(color, 0.05));
};

export const getPokemonDescription = (speciesData: any) => {
  const entry = speciesData.flavor_text_entries
    .filter((item: any) => item.language.name === "en").splice(1,3)
    .map((item: any) => item.flavor_text)
    .join(" | ");

  console.log({ entry });

  return entry?.replace(/\f/g, " ").replace(/\n/g, " ") || "";
};
