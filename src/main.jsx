import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { AuthLayout } from "./components/index.js";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Profile from "./pages/Profile.jsx";
import MyQuery from "./pages/MyQuery.jsx";
import AddQuery from "./pages/AddQuery.jsx";
import ChangePassword from "./pages/ChangePassword.jsx";
import AnimalDetail from "./pages/AnimalDetail.jsx";
import RescuerLayout from "./RescuerLayout.jsx";
import OrganizationLayout from "./OrganizationLayout.jsx";
import OrgHome from "./pages/orgPages/Home.jsx";
import { AuthLayoutForOrg } from "./components/orgComponents/index.js";
import { AuthLayoutForRes } from "./components/rescuerComponents/index.js";
import SignPageChoice from "./pages/SignPageChoice.jsx";
import OrgLogin from "./pages/orgPages/Login";
import OrgSignup from "./pages/orgPages/Signup";
import AddRescuers from "./pages/orgPages/AddRescuers";
import OrgProfile from "./pages/orgPages/Profile";
import OrgChangePassword from "./pages/orgPages/ChangePasswordForOrg.jsx";
import ResLogin from "./pages/rescuerPages/Login";
import ResProfile from "./pages/rescuerPages/Profile";
import AddedAnimals from "./pages/rescuerPages/AddedAnimals.jsx";
import ResAnimalDetail from "./pages/rescuerPages/AnimalDetail";
import ResHome from "./pages/rescuerPages/Home";
import RescuedAnimal from "./pages/orgPages/RescuedAnimal";
import ChangePasswordForRes from "./pages/rescuerPages/ChangePasswordForRes.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/choose-user",
                element: (
                    <AuthLayout authentication={false}>
                        <SignPageChoice />
                    </AuthLayout>
                ),
            },
        ],
    },
    {
        path: "/user",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "login",
                element: (
                    <AuthLayout authentication={false}>
                        <Login />
                    </AuthLayout>
                ),
            },
            {
                path: "signup",
                element: (
                    <AuthLayout authentication={false}>
                        <Signup />
                    </AuthLayout>
                ),
            },
            {
                path: "profile",
                element: (
                    <AuthLayout authentication>
                        <Profile />
                    </AuthLayout>
                ),
            },
            {
                path: "my-queries",
                element: (
                    <AuthLayout authentication>
                        <MyQuery />
                    </AuthLayout>
                ),
            },
            {
                path: "add-query",
                element: (
                    <AuthLayout authentication>
                        <AddQuery />
                    </AuthLayout>
                ),
            },
            {
                path: "change-password",
                element: (
                    <AuthLayout authentication>
                        <ChangePassword />
                    </AuthLayout>
                ),
            },
            {
                path: "animal-info/:animalId",
                element: (
                    <AuthLayout authentication>
                        <AnimalDetail />
                    </AuthLayout>
                ),
            },
        ],
    },
    {
        path: "/org",
        element: <OrganizationLayout />,
        children: [
            {
                path: "/org",
                element: <OrgHome />,
            },
            {
                path: "login",
                element: (
                    <AuthLayoutForOrg authentication={false}>
                        <OrgLogin />
                    </AuthLayoutForOrg>
                ),
            },
            {
                path: "signup",
                element: (
                    <AuthLayoutForOrg authentication={false}>
                        <OrgSignup />
                    </AuthLayoutForOrg>
                ),
            },

            {
                path: "profile",
                element: (
                    <AuthLayoutForOrg authentication>
                        <OrgProfile />
                    </AuthLayoutForOrg>
                ),
            },
            {
                path: "add-rescuer",
                element: (
                    <AuthLayoutForOrg authentication>
                        <AddRescuers />
                    </AuthLayoutForOrg>
                ),
            },
            {
                path: "change-password",
                element: (
                    <AuthLayoutForOrg authentication>
                        <OrgChangePassword />
                    </AuthLayoutForOrg>
                ),
            },
            {
                path: "rescued-animals",
                element: (
                    <AuthLayoutForOrg authentication>
                        <RescuedAnimal />
                    </AuthLayoutForOrg>
                ),
            },
        ],
    },
    {
        path: "/rescuer",
        element: <RescuerLayout />,
        children: [
            {
                path: "",
                element: <ResHome />,
            },

            {
                path: "login",
                element: (
                    <AuthLayoutForRes authentication={false}>
                        <ResLogin />
                    </AuthLayoutForRes>
                ),
            },

            {
                path: "profile",
                element: (
                    <AuthLayoutForRes authentication>
                        <ResProfile />
                    </AuthLayoutForRes>
                ),
            },
            {
                path: "rescued-animals",
                element: (
                    <AuthLayoutForRes authentication>
                        <AddedAnimals />
                    </AuthLayoutForRes>
                ),
            },
            {
                path: "change-password",
                element: (
                    <AuthLayoutForRes authentication>
                        <ChangePasswordForRes />
                    </AuthLayoutForRes>
                ),
            },
            {
                path: "animal-info/:animalId",
                element: (
                    <AuthLayoutForRes authentication>
                        <ResAnimalDetail />
                    </AuthLayoutForRes>
                ),
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);
