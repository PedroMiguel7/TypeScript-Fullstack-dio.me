import { Box, Text } from "@chakra-ui/react";

interface IcardInfo {
  mainContent: string;
  content: string;
}

export const CardInfo = (info: IcardInfo) => {
  return (
    <Box
      minHeight={120}
      width={320}
      backgroundColor={"#ffffff"}
      padding={8}
      borderRadius={25}
    >
      <Text fontSize="2x1" fontWeight={"bold"}>
        {info.mainContent}
      </Text>
      <Text fontSize={"xl"}> {info.content}</Text>
    </Box>
  );
};
