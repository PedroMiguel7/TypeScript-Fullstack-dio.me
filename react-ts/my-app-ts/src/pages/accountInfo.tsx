import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const AccountInfo = () => {
  return (
    <>
      <Text fontSize="3xl" fontWeight="bold">
        Informações da conta
      </Text>
      <Link to="/account/1">
        <Text fontSize="xl">Conta</Text>
      </Link>
    </>
  );
};
