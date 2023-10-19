import { Outlet } from "react-router-dom";
import Footer from "../../components/ui/Footer";
import Header from "../../components/ui/Header";

const MainLayout = () => {
  return (
    <>
      <Header />
      {/* full screen minus footer */}
      <main className="min-h-screen]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
