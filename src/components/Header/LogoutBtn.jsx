import { useDispatch } from "react-redux";
// import authService from "../../appwrite/auth";

import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../api/userApi";
import Cookies from "js-cookie";
import { logout } from "../../store/authSlice";

function LogoutBtn() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = async () => {
        window.localStorage.clear();
        try {
            const data = await logoutUser();

            console.log({ data });
            dispatch(logout());
            navigate("/login");
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <button
            className="inline-block list-none px-6 py-2 duration-200 text-[#a49d91] hover:text-white rounded-full"
            onClick={logoutHandler}
        >
            Logout
        </button>
    );
}

export default LogoutBtn;
