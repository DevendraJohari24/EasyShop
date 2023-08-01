import Navbar from "../../Navbar/Navbar";
import {Outlet} from "react-router-dom";
import Footer from "../Footer/Footer";
const Header = () => {
    return (
        <>
        {/* Navbar */}
        <Navbar />
        <Outlet />
        <Footer />
        </>
    );
}

export default Header;
