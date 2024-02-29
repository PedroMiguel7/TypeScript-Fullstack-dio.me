import { Header } from "./header/header";
import { Footer } from "./footer";

export const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
