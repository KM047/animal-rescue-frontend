import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

// import { login, logout } from "./store/authSlice";
import { Header } from "./components/index";

import { Outlet } from "react-router-dom";

import Loading from "./components/Loading";
import { login, logout } from "./store/authSlice";
import { getCurrentUser } from "./api/userApi";

function App() {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const loggedInUser = localStorage.getItem("userLogged");

        console.log("loggedInUser is ", loggedInUser);

        if (loggedInUser) {
            // const foundUser = JSON.parse(loggedInUser);
            setUserData(loggedInUser);
        }
        if (userData) {
            dispatch(login(userData));
        } else {
            dispatch(logout());
        }
    }, []);

    return (
        <div className=" min-h-screen flex flex-wrap content-between bg-[#000000]">
            <div className="w-full block">
                <Header />
                {!loading ? (
                    <main className="min-h-[300px]">
                        <Outlet />
                    </main>
                ) : (
                    <Loading />
                )}
                {/* <Footer /> */}
            </div>
        </div>
    );
}

export default App;
