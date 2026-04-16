import { useState } from "react";

import {Image as RNImage, View} from "react-native";

interface Props {
  src: string;
  width: number;
  height: number;
  alt?: string;
}

const Image = ({ src, height, width, alt }: Props) => {
  const [isLoaded, setLoaded] = useState<boolean>(false);

  return (
    <View  style={{ width, height }}>
      {!isLoaded && (
        <View  className="w-full h-full rounded animate-pulse inset-0 absolute bg-gray-300"/>
      )}

      <RNImage
        source={{uri:src}}
        className={`object-contain transition-opacity duration-300`}
         style={{   
          width,
          height,
          opacity: isLoaded ? 1 : 0,
        }}
        alt={alt}
        onLoad={() => setLoaded(true)}
      />
    </View>
  );
};

export default Image;
