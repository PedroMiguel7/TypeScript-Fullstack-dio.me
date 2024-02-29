import styled from "styled-components";

import { Footer } from "./footer";
import { Header } from "./header/header";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const Layout = ({ children }: any) => {
  return (
    <Box>
      <Header />
      {children}
      <Footer />
    </Box>
  );
};
