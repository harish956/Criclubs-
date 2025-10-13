import React from "react";
import { Box, Text, Image, View } from "@gluestack-ui/themed";
type LeagueCardProps = {
  title: string;
  location: string;
};
export const LeagueCard = ({ title, location }: LeagueCardProps) => {
  return (
    <View
      mx={13}
      my={10}
      bg="#FFFFFF"
      flexDirection="row"
      alignItems="center"
      borderWidth={1}
      p={10}
      borderColor="#FFFFFF"
      borderRadius={15}
      justifyContent="flex-start"
    >
      <Image
        borderRadius={20}
        source={require("../assets/images/Group.png")}
        h={45}
        w={45}
        alt="League Logo"
      />
      <View alignItems="flex-start" flex={1}>
        <Text fontFamily="Inter_600SemiBold" fontSize={12} color="#000000">
          {title}
        </Text>
        <View flexDirection="row" alignItems="center" mt="$1">
          <Image
            source={require("../assets/images/location_on.png")}
            style={{ width: 9, height: 13, marginRight: 4 }}
            alt="Location Icon"
          />
          <Text color="#737474" fontSize={11} fontFamily="Inter_400Regular">
            {location}
          </Text>
        </View>
      </View>
      <Image
        source={require("../assets/images/rightArrow.png")}
        alt="Arrow"
        style={{ width: 24, height: 24, marginLeft: 75 }}
      />
    </View>
  );
};
