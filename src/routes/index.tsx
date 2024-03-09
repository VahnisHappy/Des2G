import {RouteObject} from "react-router-dom";
import App from "@/components/pages/App";
import Welcome from "@/components/pages/Welcome";

const routes: Array<RouteObject> = [
    {
        path: "/",
        element: <Welcome />
    },
    {
        path: "/app",
        element: <App/>
    }
]
export default routes;