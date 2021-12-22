import { Outlet, Link } from "react-router-dom";
import "../Layout.css";
import vending_machine from "../vending.png";
import "../Vending.css";

const Layout = () => {
  return (
    <>
      <div className="w3-bar w3-dark-grey">
        <h1 className="w3-margin">Vending Machine</h1>
      </div>
      <Outlet />
    </>
  )
};

export default Layout;
