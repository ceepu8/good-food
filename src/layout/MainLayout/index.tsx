import { Outlet } from "react-router-dom";
import Footer from "../../components/ui/Footer";
import Header from "../../components/ui/Header";

const MainLayout = () => {
  return (
    <>
      <Header />
      {/* full screen minus footer */}
      <main className="min-h-[calc(100vh-287px)]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
