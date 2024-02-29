import { Button } from "@chakra-ui/react";

interface ButtonLoginProps {
  event: () => void;
}

export const ButtonLogin = ({ event }: ButtonLoginProps) => {
  return (
    <Button onClick={event} colorScheme="teal" size={"sm"} width={"100%"}>
      Entrar
    </Button>
  );
};
