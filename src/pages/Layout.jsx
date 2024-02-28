import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

const primaryNav = [
  { title: "Home", url: "/" },
  { title: "Cart", url: "/cart" },
  { title: "items", url: "items" },
];

const Layout = () => {
  return (
    <>
      <Navigation navItems={primaryNav} />
      <Outlet />
    </>
  );
};
export default Layout;
