import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { api, UserAccount } from "../api";
import { AppContext } from "../components/appContext";
import { CardInfo } from "../components/cardInfo";

export const Account = () => {
  const [userData, setUserData] = useState<null | UserAccount>();
  const actualDate = new Date();
  const navigate = useNavigate();
  const context = useContext(AppContext);
  const user = JSON.parse(localStorage.getItem("dioBank") || "{}");

  useEffect(() => {
    const getData = async () => {
      const data: any | UserAccount = await api;
      setUserData(data);
    };

    getData();
  }, []);

  if (!user.logged || !context.isLoggedIn) {
    navigate("/");
  }

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
