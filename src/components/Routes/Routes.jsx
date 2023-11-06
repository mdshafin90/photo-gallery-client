import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Home/Home/Home";
import AllPhotos from "../AllPhotos/AllPhotos";
import AddPhoto from "../AddPhoto/AddPhoto";
import AboutUs from "../AboutUs/AboutUs";
import UpdatePhoto from "../UpdatePhoto/UpdatePhoto";
import Login from "../Login/Login/Login";
import Register from "../Login/Register/Register";
import PhotoDetails from "../AllPhotos/PhotoDetails";
import PageError from "../PageError/PageError";


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
                loader: () => fetch('http://localhost:4000/photos')
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
                loader: ({ params }) => fetch(`http://localhost:4000/photos/${params.id}`)
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/photoDetails/:id',
                element: <PhotoDetails />,
                loader: ({ params }) => fetch(`http://localhost:4000/photos/${params.id}`)
            }
        ]
    },
    {
        path: '/*',
        element: <PageError />
    }
]);

export default router;