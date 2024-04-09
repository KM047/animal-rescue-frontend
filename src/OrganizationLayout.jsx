import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

// import { login, logout } from "./store/authSlice";
import { Header } from "./components/orgComponents/index";

import { Outlet } from "react-router-dom";

import Loading from "./components/Loading";
import { login as authLogin, logout } from "./store/orgAuthSlice";
import {
    getAllRescuedAnimal,
    getAllRescuers,
    getCurrentOrg,
} from "./api/orgApi";
import { setAllRescuers } from "./store/allRescuersSlice";
import { setAllRescuedAnimals } from "./store/allRescuedAnimalsSlice";

function OrganizationLayout() {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        setLoading(true);
        getCurrentOrg().then((orgData) => {
            if (orgData.data) {
                // console.log("orgData.data is ", orgData.data);
                dispatch(authLogin(orgData.data));

                getAllRescuers().then((rescuersData) => {
                    if (rescuersData.data) {
                        // console.log(rescuersData.data);
                        dispatch(setAllRescuers(rescuersData.data));
                    }
                });

                getAllRescuedAnimal().then((rescuedAnimal) => {
                    if (rescuedAnimal.data) {
                        // console.log(rescuedAnimal.data);
                        dispatch(setAllRescuedAnimals(rescuedAnimal.data));
                    }
                });
            } else {
                dispatch(logout());
            }
        });

        setLoading(false);
    }, [dispatch]);

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

export default OrganizationLayout;
