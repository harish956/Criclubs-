import { View, Text, Image } from "@gluestack-ui/themed";
import { Dimensions } from "react-native";
export default function NewsCard({
  imgUrl,
  text,
  date,
}: {
  imgUrl: string;
  text: string;
  date: string;
}) {
  const deviceWidth = Dimensions.get("window").width;

  return (
    <View borderColor="#DEDEDE" borderWidth={1} borderRadius={15}>
      <Image
        source={imgUrl}
        alt="news Image"
        width={deviceWidth - 26}
        h={192}
        borderTopLeftRadius={15}
        borderTopRightRadius={15}
      />
      <Text fontFamily="Inter_600SemiBold" fontSize={13} color="#000000" m={10}>
        {text}
      </Text>
      <Text
        fontFamily="Inter_500Medium"
        color="#737474"
        fontSize={11}
        flex={1}
        textAlign="right"
        mb={10}
        mr={10}
      >
        {date}
      </Text>
    </View>
  );
}
