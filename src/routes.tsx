import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./page/Home";
import Watch from "./page/Watch";

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "watch",
                element: <Watch />
            }
        ]
    }
])

export default appRouter