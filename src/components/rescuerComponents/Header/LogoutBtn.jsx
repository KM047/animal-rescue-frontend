import { useDispatch } from "react-redux";
// import authService from "../../appwrite/auth";

import { useNavigate } from "react-router-dom";
import { logoutRescuer } from "../../../api/rescuerApi";
import Cookies from "js-cookie";
import { logout } from "../../../store/rescuerAuthSlice";
import { removeAllAnimals } from "../../../store/animalSlice";

function LogoutBtn() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = async () => {
        window.localStorage.clear();
        try {
            const data = await logoutRescuer();

            // console.log({ data });
            dispatch(logout());
            dispatch(removeAllAnimals());
            navigate("/rescuer/login");
            window.location.reload();
        } catch (error) {
            console.log(error);
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
