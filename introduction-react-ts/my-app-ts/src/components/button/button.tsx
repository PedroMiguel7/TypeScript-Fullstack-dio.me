import { Button } from "@chakra-ui/react";
import { MouseEventHandler } from "react";

interface ButtonLoginProps {
  onClick: MouseEventHandler;
}

export const ButtonLogin = ({ onClick }: ButtonLoginProps) => {
  return (
    <Button onClick={onClick} colorScheme="teal" size={"sm"} width={"100%"}>
      Entrar
    </Button>
  );
};
