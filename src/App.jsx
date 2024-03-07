import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

// import { login, logout } from "./store/authSlice";
import { Header } from "./components/index";

import { Outlet } from "react-router-dom";

import Loading from "./components/Loading";

function App() {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    return (
        <div className=" min-h-screen flex flex-wrap content-between bg-[#131516]">
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
