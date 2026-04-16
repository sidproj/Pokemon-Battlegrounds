export interface PokemonsInterface {
  count: number;
  next: string;
  previous: string;
  results: any[];
}

export type PokemonTypeName =
  | "normal"
  | "fire"
  | "water"
  | "electric"
  | "grass"
  | "ice"
  | "fighting"
  | "poison"
  | "ground"
  | "flying"
  | "psychic"
  | "bug"
  | "rock"
  | "ghost"
  | "dragon"
  | "dark"
  | "steel"
  | "fairy";

export type TypePalette = {
  primary: string;
  light: string;
  dark: string;
  accent: string;
};
