import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { AuthLayout } from "./components/index.js";

import RescuerLayout from "./RescuerLayout.jsx";
import OrganizationLayout from "./OrganizationLayout.jsx";
import { AuthLayoutForOrg } from "./components/orgComponents/index.js";
import { AuthLayoutForRes } from "./components/rescuerComponents/index.js";

import {
    UserHome,
    UserLogin,
    UserMyQuery,
    UserProfile,
    UserAddQuery,
    UserAnimalDetail,
    UserChangePassword,
    SignPageChoice,
    UserSignup,
    AddRescuers,
    ChangePasswordForOrg,
    OrgHome,
    OrgLogin,
    OrgSignup,
    OrgRescuedAnimal,
    RescuerAddedAnimals,
    RescuerAnimalDetail,
    ChangePasswordForRes,
    RescuerHome,
    RescuerProfile,
    OrgProfile,
    RescuerLogin,
} from "./pages/index.js";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <UserHome />,
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
                path: "/",
                element: <UserHome />,
            },
            {
                path: "login",
                element: (
                    <AuthLayout authentication={false}>
                        <UserLogin />
                    </AuthLayout>
                ),
            },
            {
                path: "signup",
                element: (
                    <AuthLayout authentication={false}>
                        <UserSignup />
                    </AuthLayout>
                ),
            },
            {
                path: "profile",
                element: (
                    <AuthLayout authentication>
                        <UserProfile />
                    </AuthLayout>
                ),
            },
            {
                path: "my-queries",
                element: (
                    <AuthLayout authentication>
                        <UserMyQuery />
                    </AuthLayout>
                ),
            },
            {
                path: "add-query",
                element: (
                    <AuthLayout authentication>
                        <UserAddQuery />
                    </AuthLayout>
                ),
            },
            {
                path: "change-password",
                element: (
                    <AuthLayout authentication>
                        <UserChangePassword />
                    </AuthLayout>
                ),
            },
            {
                path: "animal-info/:animalId",
                element: (
                    <AuthLayout authentication>
                        <UserAnimalDetail />
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
                        <ChangePasswordForOrg />
                    </AuthLayoutForOrg>
                ),
            },
            {
                path: "rescued-animals",
                element: (
                    <AuthLayoutForOrg authentication>
                        <OrgRescuedAnimal />
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
                element: <RescuerHome />,
            },

            {
                path: "login",
                element: (
                    <AuthLayoutForRes authentication={false}>
                        <RescuerLogin />
                    </AuthLayoutForRes>
                ),
            },

            {
                path: "profile",
                element: (
                    <AuthLayoutForRes authentication>
                        <RescuerProfile />
                    </AuthLayoutForRes>
                ),
            },
            {
                path: "rescued-animals",
                element: (
                    <AuthLayoutForRes authentication>
                        <RescuerAddedAnimals />
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
                        <RescuerAnimalDetail />
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
