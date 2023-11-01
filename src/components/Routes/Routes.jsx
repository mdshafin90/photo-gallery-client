import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Home/Home/Home";
import AllPhotos from "../AllPhotos/AllPhotos";
import AddPhoto from "../AddPhoto/AddPhoto";
import AboutUs from "../AboutUs/AboutUs";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/allPhotos',
                element: <AllPhotos />
            },
            {
                path: '/addPhoto',
                element: <AddPhoto />
            },
            {
                path: '/aboutUs',
                element: <AboutUs />
            }
        ]
    },
]);

export default router;