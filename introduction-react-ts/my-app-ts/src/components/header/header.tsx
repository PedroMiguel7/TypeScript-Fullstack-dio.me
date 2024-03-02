import "./header.css";

import { Heading } from "@chakra-ui/react";
import { useContext } from "react";

import { AppContext } from "../../App";
import bankIcon from "../../assets/bank-icon-5.png";

export const Header = () => {
  const context = useContext(AppContext);

  return (
    <div className="header">
      <img src={bankIcon} alt="bank icon" />
      <Heading> Dio Bank</Heading>
    </div>
  );
};
