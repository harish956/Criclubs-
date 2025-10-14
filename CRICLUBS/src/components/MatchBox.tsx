import { Text, VStack, Divider } from "@gluestack-ui/themed";
export default function MatchBox() {
  return (
    <VStack
      borderColor="#DEDEDE"
      borderWidth={1}
      bg="#FFFFFF"
      borderRadius={15}
      px={13}
      py={10}
    >
      <Text color="#737474" fontFamily="Inter_500Medium" fontSize={11}>
        Current Series
      </Text>
      <Text
        fontFamily="Inter_600SemiBold"
        fontSize={12}
        color="#000000"
        mb={12}
      >
        test Divisions dbdn
      </Text>
      <Divider bg="#DEDEDE" />
      <Text color="#737474" fontFamily="Inter_500Medium" fontSize={11} mt={12}>
        About
      </Text>
      <Text fontFamily="Inter_600SemiBold" fontSize={12} color="#000000">
        Test
      </Text>
    </VStack>
  );
}
