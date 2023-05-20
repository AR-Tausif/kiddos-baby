import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../shared/pages/home/Home";
import AllToys from "../shared/pages/allToys/AllToys";
import AddToy from "../shared/pages/addToys/AddToy";
import Register from "../shared/pages/register/Register"
import Login from "../shared/pages/login/Login";
import Profile from "../shared/pages/profile/Profile";
import MyToys from "../shared/pages/myToys/MyToys";
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
            },
            {
                path: "my-toys",
                element: <MyToys />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "profile",
                element: <Profile />
            },
        ]
    },
]);

export default router;