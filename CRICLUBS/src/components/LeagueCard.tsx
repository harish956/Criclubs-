import React from "react";
import { Box, Text, Image, View, Pressable } from "@gluestack-ui/themed";
import { router } from "expo-router";
import { LeagueCardProps } from "../interfaces/LeagueCard";
export const LeagueCard = ({ league, style }: LeagueCardProps) => {
  return (
    <Pressable
      mx={13}
      mb={10}
      style={style}
      onPress={() => {
        router.push(`/LeagueDetails/${league.clubId}`);
      }}
    >
      {({ pressed }) => (
        <Box
          flexDirection="row"
          alignItems="center"
          borderWidth={1}
          borderColor="#FFFFFF"
          bg={"#FFFFFF"}
          borderRadius={15}
          p={10}
          justifyContent="flex-start"
          transform={[{ scale: pressed ? 0.95 : 1 }]}
        >
          <Image
            borderRadius={20}
            source={require("../../assets/images/Group.png")}
            h={45}
            w={45}
            alt="League Logo"
          />
          <View alignItems="flex-start" flex={1} ml={10}>
            <Text fontFamily="Inter_600SemiBold" fontSize={12} color="#000000">
              {league?.clubName}
            </Text>
            <View flexDirection="row" alignItems="center" mt="$1">
              <Image
                source={require("../../assets/images/location_on.png")}
                style={{ width: 9, height: 13, marginRight: 4 }}
                alt="Location Icon"
              />
              <Text color="#737474" fontSize={11} fontFamily="Inter_400Regular">
                {league?.location}
              </Text>
            </View>
          </View>
          <Image
            source={require("../../assets/images/rightArrow.png")}
            alt="Arrow"
            style={{ width: 24, height: 24, marginLeft: 75 }}
          />
        </Box>
      )}
    </Pressable>
  );
};
