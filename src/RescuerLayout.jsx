import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

// import { login, logout } from "./store/authSlice";
import { Header } from "./components/rescuerComponents/index";

import { Outlet } from "react-router-dom";

import Loading from "./components/Loading";
import { login as authLogin, logout } from "./store/rescuerAuthSlice";
import { getCurrentRescuer } from "./api/rescuerApi";


function RescuerLayout() {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    // const [userData, setUserData] = useState(null);

    useEffect(() => {
        setLoading(true);
        getCurrentRescuer().then((rescuerData) => {
            if (rescuerData.data) {
                // console.log("rescuerData.data is ", rescuerData.data);
                dispatch(authLogin(rescuerData.data));

                // getAllAnimalsData().then((animalData) => {
                //     if (animalData.data) {
                //         // console.log(animalData.data);
                //         dispatch(setAnimal(animalData.data));
                //     }
                // });
            } else {
                dispatch(logout());
            }
        });

        setLoading(false);
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

export default RescuerLayout;
