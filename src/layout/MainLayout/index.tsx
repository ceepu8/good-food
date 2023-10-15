import Footer from "../../components/ui/Footer";
import Header from "../../components/ui/Header";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Header />
      <main className="pt-[75px]">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
