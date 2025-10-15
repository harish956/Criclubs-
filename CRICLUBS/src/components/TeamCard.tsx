import { Box, HStack, Image, Text } from "@gluestack-ui/themed";

export default function TeamCard({
  teamUrl,
  teamName,
  score,
  overs,
}: {
  teamUrl: string;
  teamName: string;
  score: number;
  overs: number;
}) {
  const firstChar = teamName?.charAt(0)?.toUpperCase();
  return (
    <HStack justifyContent="space-between" alignItems="center" mt={10}>
      <HStack alignItems="center">
        {teamUrl.endsWith(".jpg") ? (
          <Image
            h={32}
            width={32}
            borderRadius={16}
            source={teamUrl}
            alt={teamName}
          />
        ) : (
          <Box
            w={32}
            h={32}
            borderRadius={16}
            bg="#F3F4F6"
            alignItems="center"
            justifyContent="center"
            borderWidth={1}
            borderColor="#E5E7EB"
          >
            <Text fontWeight="bold" color="#374151">
              {firstChar}
            </Text>
          </Box>
        )}

        <Text
          fontSize={11}
          color="#000000"
          fontFamily="Inter_500Medium"
          ml={10.68}
        >
          {teamName}
        </Text>
      </HStack>

      <Text
        fontSize={12}
        color="#000000"
        fontFamily="Inter_600SemiBold"
        mr={5.6}
      >
        {score}{" "}
        <Text fontSize={11} color="#605E5E" fontFamily="Inter_500Medium">
          ({overs} OV)
        </Text>
      </Text>
    </HStack>
  );
}
