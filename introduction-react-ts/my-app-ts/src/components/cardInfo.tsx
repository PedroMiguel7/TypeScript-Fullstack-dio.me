import { Box } from "@chakra-ui/react";

interface IcardInfo {
  text: string;
}

export const CardInfo = ({ text }: IcardInfo) => {
  return (
    <Box
      minHeight={120}
      width={320}
      backgroundColor={"#ffffff"}
      padding={8}
      borderRadius={25}
    >
      {text}
    </Box>
  );
};
