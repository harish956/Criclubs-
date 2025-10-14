import React from "react";
import { router, useLocalSearchParams, Stack } from "expo-router";
import { Box, Text, Center, Pressable } from "@gluestack-ui/themed";

export default function LeagueDetails() {
  const { clubId } = useLocalSearchParams();

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      <Center flex={1} bg="#fff">
        <Box p={20} alignItems="center">
          <Text fontSize={18} fontFamily="Inter_600SemiBold">
            League Details Screen
          </Text>
          <Text fontSize={14} mt={10} color="#737474">
            Club ID: {clubId}
          </Text>
        </Box>

        <Pressable
          onPress={() => router.replace("/(tabs)/MyGamesScreen")}
          bg="#007AFF"
          px={16}
          py={10}
          borderRadius={8}
        >
          {({ pressed }) => (
            <Text color="white" transform={[{ scale: pressed ? 0.95 : 1 }]}>
              Go Back
            </Text>
          )}
        </Pressable>
      </Center>
    </>
  );
}
