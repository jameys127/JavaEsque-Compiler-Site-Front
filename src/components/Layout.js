import { Outlet } from "react-router-dom";
import Header from "./Fixed/Header";
import Footer from "./Fixed/Footer";

const Layout = () => {
    return (
        <>
            <div className="particles"></div>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout