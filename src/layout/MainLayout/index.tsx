import { Outlet } from "react-router-dom";
import Footer from "../../components/ui/Footer";
import Header from "../../components/ui/Header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
