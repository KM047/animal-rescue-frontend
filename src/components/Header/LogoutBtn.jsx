import { useDispatch } from "react-redux";
// import authService from "../../appwrite/auth";

import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../api/userApi";
import Cookies from "js-cookie";
import { logout } from "../../store/authSlice";
import { removeAllAnimals } from "../../store/animalSlice";

function LogoutBtn() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = async () => {
        window.localStorage.clear();
        try {
            const data = await logoutUser();

            // console.log({ data });
            dispatch(logout());
            dispatch(removeAllAnimals());
            Cookies.remove("accessToken");
            Cookies.remove("refreshToken");

            navigate("/");
            window.location.reload();
        } catch (error) {
            // console.log(error);
        }
    };

    return (
        <button
            className="inline-block list-none px-6 py-2 duration-200 text-[#a49d91] hover:text-red-700 rounded-full border-[1px] border-white"
            onClick={logoutHandler}
        >
            Logout
        </button>
    );
}

export default LogoutBtn;
