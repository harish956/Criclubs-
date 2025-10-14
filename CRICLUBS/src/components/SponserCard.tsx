import { View, Text, Image } from "@gluestack-ui/themed";
export default function SponserCard({ imgUrl }: { imgUrl: string }) {
  return (
    <View
      borderRadius={10}
      bg="#FFFFFF"
      borderColor="#DEDEDE"
      p={8}
      flex={1}
      borderWidth={1}
    >
      <Image source={imgUrl} alt="sponser image" flex={1} alignSelf="center" />
      <Text fontFamily="Inter_500Medium" fontSize={11} color="#000000">
        IPL Auction 2025
      </Text>
    </View>
  );
}
