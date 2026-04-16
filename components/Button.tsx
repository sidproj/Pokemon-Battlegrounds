import { Pressable } from "react-native";
import Text from "./Text";

interface ButtonProps {
  text: string;
  type: "INFO" | "WARNING" | "SUBMIT" | "DELETE";
  onClick: () => void;
}

const getBgColor = (type: "INFO" | "WARNING" | "SUBMIT" | "DELETE") => {
  switch (type) {
    case "INFO":
      return "bg-[#30a7d7]";
    default:
      return "bg-[#30a7d7]";
  }
};

const Button = (props: ButtonProps) => {
  const { text, type, onClick } = props;

  const bgColor = getBgColor(type);

  return (
    <Pressable
      onPress={onClick}
      className={`flex flex-row w-fit px-5 pb-2.5 pt-2.5 ${bgColor} rounded-md text-white`}
    >
      <Text className="text-white">{text}</Text>
    </Pressable>
  );
};

export default Button;
