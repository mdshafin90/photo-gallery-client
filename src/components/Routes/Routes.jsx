import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Home/Home/Home";
import AllPhotos from "../AllPhotos/AllPhotos";
import AddPhoto from "../AddPhoto/AddPhoto";
import AboutUs from "../AboutUs/AboutUs";
import UpdatePhoto from "../UpdatePhoto/UpdatePhoto";


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
                element: <AllPhotos />,
                loader: () => fetch('http://localhost:5000/photos')
            },
            {
                path: '/addPhoto',
                element: <AddPhoto />
            },
            {
                path: '/aboutUs',
                element: <AboutUs />
            },
            {
                path: '/updatePhoto/:id',
                element: <UpdatePhoto />,
                loader: ({ params }) => fetch(`http://localhost:5000/photos/${params.id}`)
            }
        ]
    },
]);

export default router;