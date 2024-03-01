import { Center, SimpleGrid } from "@chakra-ui/react";

import { CardInfo } from "../components/cardInfo";
import { useEffect, useState } from "react";
import { UserAccount, api } from "../api";

export const Account = () => {
  const [userData, setUserData] = useState<null | UserAccount>();

  useEffect(() => {
    const getData = async () => {
      const data: any | UserAccount = await api;
      setUserData(data);
    };

    getData();
  }, []);

  console.log(userData);

  return (
    <Center>
      <SimpleGrid columns={2} spacing={8} paddingTop={16}>
        <CardInfo text="Informações de acesso"></CardInfo>
        <CardInfo text="Informações da conta"></CardInfo>
      </SimpleGrid>
    </Center>
  );
};
