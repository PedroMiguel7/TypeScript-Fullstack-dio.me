import { Heading } from "@chakra-ui/react";
import "./header.css";

import bankIcon from "../../assets/bank-icon-5.png";

export const Header = () => {
  return (
    <div className="header">
      <img src={bankIcon} alt="bank icon" />
      <Heading> Dio Bank</Heading>
    </div>
  );
};
