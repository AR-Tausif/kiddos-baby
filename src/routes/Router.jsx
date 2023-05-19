import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../shared/pages/home/Home";
import AllToys from "../shared/pages/allToys/AllToys";
import AddToy from "../shared/pages/addToys/AddToy";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "all-toys",
                element: <AllToys />
            },
            {
                path: "add-toy",
                element: <AddToy />
            }
        ]
    },
]);

export default router;