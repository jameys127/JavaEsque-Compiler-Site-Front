import { Outlet } from "react-router-dom";
import Header from "./Fixed/Header";
import Footer from "./Fixed/Footer";
import AnimatedRoutes from "./animation/AnimatedRoutes";

const Layout = () => {
    return (
        <div class="relative min-h-screen min-w-screen bg-black text-white z-10">
            <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px] z-10">
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_50%_300px,#ffffff08,transparent)] z-10" />
            <div className="flex flex-col relative z-20 min-h-screen min-w-screen">
                <Header />
                <AnimatedRoutes>
                    <Outlet />
                </AnimatedRoutes>
                <Footer />
            </div>
        </div>
    )
}

export default Layout