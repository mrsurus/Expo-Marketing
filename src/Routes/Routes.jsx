import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Components/Home/Home";
import Services from "../Components/Services/Services";
import ServiceDetails from "../Components/Services/ServiceDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }, 
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/sevicedetails/:id',
                element: <ServiceDetails></ServiceDetails>

            }
        ]
    }
])

export default router