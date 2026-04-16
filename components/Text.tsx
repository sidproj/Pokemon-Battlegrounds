import { Text as RNText, TextProps } from "react-native";

const Text = ({ style, ...props }: TextProps) => {
  return (
    <RNText style={[{ fontFamily: "Flexo-Demi" }, style]} {...props} />
  );
};

export default Text;