import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const LayoutScreen = () =>{
    return(
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer /> 
        </>
    )
}

export default LayoutScreen;