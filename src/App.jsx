import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

// import { login, logout } from "./store/authSlice";
import { Header } from "./components/index";

import { Outlet } from "react-router-dom";

import Loading from "./components/Loading";
import { login as authLogin, logout } from "./store/authSlice";
import { getCurrentUser } from "./api/userApi";
import { getAllAnimalsData } from "./api/animalApi";
import { setAnimal } from "./store/animalSlice";

function App() {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    // const [userData, setUserData] = useState(null);

    useEffect(() => {
        getCurrentUser().then((userData) => {
            if (userData.data) {
                console.log("userData.data is ", userData.data);
                dispatch(authLogin(userData.data));

                getAllAnimalsData().then((animalData) => {
                    if (animalData.data) {
                        dispatch(setAnimal(animalData.data));
                    }
                });
            } else {
                dispatch(logout());
            }
        });
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
