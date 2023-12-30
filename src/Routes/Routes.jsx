import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Components/Home/Home";
import Services from "../Components/Services/Services";
import ServiceDetails from "../Components/Services/ServiceDetails";
import Aboutus from "../Components/AboutUs/aboutus";
import Contact from "../Components/Contact/Contact";

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
            },
            {
                path: '/aboutus',
                element: <Aboutus></Aboutus>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            }
        ]
    }
])

export default router