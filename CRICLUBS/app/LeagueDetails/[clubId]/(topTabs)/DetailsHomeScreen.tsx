import MatchBox from "@/src/components/MatchBox";
import NewsCard from "@/src/components/NewsCard";
import SponserCard from "@/src/components/SponserCard";
import {
  Divider,
  HStack,
  ScrollView,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { useLocalSearchParams } from "expo-router";

export default function DetailsHomeScreen() {
  const { clubId } = useLocalSearchParams();
  console.log(clubId);
  return (
    <ScrollView px={10}>
      <MatchBox />
      <Text
        fontFamily="Inter_600SemiBold"
        fontSize={15}
        color="#000000"
        mt={20}
      >
        Sponsors
      </Text>

      <HStack gap={10}>
        <SponserCard
          imgUrl={require("../../../../assets/images/sponserImage1.png")}
        />
        <SponserCard
          imgUrl={require("../../../../assets/images/sponserImage2.png")}
        />
      </HStack>
      <HStack alignItems="center" mt={20}>
        <Text fontFamily="Inter_600SemiBold" fontSize={15} color="#000000">
          News
        </Text>
        <Divider bg="#DEDEDE" />
      </HStack>
      <VStack mt={10}>
        <NewsCard
          imgUrl={require("../../../../assets/images/newsImage.png")}
          text="Semi- final Showdown: Australia Vs India, West indies vs New Zealand Confirmed"
          date="Sept 27, 2004"
        />
      </VStack>
      <HStack alignItems="center" mt={20}>
        <Text fontFamily="Inter_600SemiBold" fontSize={15} color="#000000">
          Blog
        </Text>
        <Divider bg="#DEDEDE" />
      </HStack>
      <VStack mb={30}>
        <NewsCard
          imgUrl={require("../../../../assets/images/blogImage.png")}
          text="Semi- final Showdown: Australia Vs India, West indies vs New Zealand Confirmed"
          date="Sept 27, 2004"
        />
      </VStack>
    </ScrollView>
  );
}
