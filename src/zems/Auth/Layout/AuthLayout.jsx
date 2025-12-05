import { Outlet } from "react-router-dom";

const AuthLayout = () => {
    return (
        <div className="section-padding min-h-screen grid place-content-center">
            <Outlet/>
        </div>
    );
};

export default AuthLayout;