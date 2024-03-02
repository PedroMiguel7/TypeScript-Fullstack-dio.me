import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";

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

  const actualDate = new Date();

  return (
    <Center>
      <SimpleGrid columns={2} spacing={8} paddingTop={16}>
        {userData === null || userData === undefined ? (
          <Center>
            <Spinner size="xl" />
          </Center>
        ) : (
          <>
            <CardInfo
              mainContent={`Bem vindo ${userData?.name}`}
              content={`${actualDate.getDay()}/${actualDate.getMonth()}/${actualDate.getFullYear()} ${actualDate.getHours()}:${actualDate.getMinutes()}`}
            ></CardInfo>
            <CardInfo
              mainContent="Saldo:"
              content={`R$ ${userData?.balance}`}
            ></CardInfo>
          </>
        )}
      </SimpleGrid>
    </Center>
  );
};
