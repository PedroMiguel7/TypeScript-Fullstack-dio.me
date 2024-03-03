import "./header.css";

import { Button, Heading } from "@chakra-ui/react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import bankIcon from "../../assets/bank-icon-5.png";
import { AppContext } from "../appContext";
import { changeLocalStorage } from "../services/storage";

export const Header = () => {
  const context = useContext(AppContext);
  const navigate = useNavigate();

  const loggout = () => {
    context.setIsLoggedIn(false);
    changeLocalStorage("dioBank", {
      logged: false,
    });
    navigate("/");
  };

  return (
    <div className="header">
      <img
        onClick={() => navigate("/account")}
        src={bankIcon}
        alt="bank icon"
      />
      <Heading> Dio Bank</Heading>
      {context.isLoggedIn ? (
        <Button size={"sm"} onClick={() => loggout()}>
          {" "}
          Sair
        </Button>
      ) : (
        <div></div>
      )}
    </div>
  );
};
