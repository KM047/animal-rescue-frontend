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
import ServerHealthCheck from "./pages/ServerHealthCheck.jsx";
import Profile from "./pages/Profile.jsx";
import TestingPage from "./pages/TestingPage.jsx";

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
                path: "/server-health",
                element: (
                    <AuthLayout authentication={false}>
                        <ServerHealthCheck />
                    </AuthLayout>
                ),
            },
            {
                path: "/login",
                element: (
                    <AuthLayout authentication={false}>
                        <Login />
                    </AuthLayout>
                ),
            },
            {
                path: "/signup",
                element: (
                    <AuthLayout authentication={false}>
                        <Signup />
                    </AuthLayout>
                ),
            },
            {
                path: "/profile",
                element: (
                    <AuthLayout authentication>
                        <Profile />
                    </AuthLayout>
                ),
            },
            {
                path: "/testing",
                element: (
                    <AuthLayout authentication={false}>
                        <TestingPage />
                    </AuthLayout>
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
