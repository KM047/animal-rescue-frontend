import React, { useState } from "react";
import { Loading } from "../components";
import { getServerHealth } from "../api/userApi";
import Cookies from "js-cookie";

function ServerHealthCheck() {
    const [healthStatus, setHealthStatus] = useState(false);
    const [loading, setLoading] = useState(false);

    const checkServerHealth = async () => {
        try {
            setLoading(true);
            const lem = Cookies.get("refreshToken");
            console.log(lem);
            const response = await getServerHealth();
            // const data = await response.json();
            console.log("response -> ", response);

            if (response.statusCode) {
                // const data = await response.json();
                console.log("This will set to ", response.statusCode);
                setHealthStatus(response.statusCode);
            } else {
                console.error(
                    "Server health check failed:",
                    response.statusText
                );
            }
        } catch (error) {
            console.error("Error during server health check:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="text-white">
            <h2 className="">Server Health Check</h2>
            <button onClick={checkServerHealth} disabled={loading}>
                {<Loading /> ? "Checking..." : "Check Server Health"}
            </button>
            {healthStatus !== null && (
                <p>Server is {healthStatus ? "healthy" : "unhealthy"}</p>
            )}
        </div>
    );
}

export default ServerHealthCheck;
