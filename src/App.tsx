import { RouterProvider, createBrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import CartProvider from "./providers/CartProvider";
import AboutPage from "./pages/AboutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
    ],
  },
]);

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
