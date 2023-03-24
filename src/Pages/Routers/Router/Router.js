import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layout/Main";
import PageNotFound from "../../404Page/404Page";
import Home from "../../Home/Home";
import Advertisement from "../../Home/Home/Advertisement/Advertisement";
import Blogs from "../../Home/Home/Blogs/Blogs";
import Myorders from "../../Home/Home/Myorders/Myorders";
import AddProducts from "../../Home/Home/AddProducts/AddProducts";
import Categories from "../../Home/Home/Categories/Categories";
import SelectedBrand from "../../SelectedBrand/SelectedBrand";
import Signup from "../../Signup/Signup";
import Login from "../../Signup/Login";
import Dashboard from "../../Dashboard/Dashboard";
import Privaterout from "../Privaterout/Privaterout";
import DashboardLayout from "../../../Layout/DashboardLayout";
import Sellers from "../../Dashboard/Sellers/Sellers";
import Buyers from "../../Dashboard/Buyers/Buyers";
import OrderedProducts from "../../OrderedProducts/OrderedProducts";
import MyProducts from "../../Home/Home/MyProducts/MyProducts";

export const routers = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/advertisement',
                element: <Advertisement></Advertisement>
            },
            {
                path: '/addProduct',
                element: <Privaterout><AddProducts></AddProducts></Privaterout>
            },
            {
                path: '/myOrders/:id',
                element: <Privaterout><Myorders></Myorders></Privaterout>,
                loader: ({ params }) => fetch(`https://smart-resale-stall-server.vercel.app/orderedProducts/${params.id}`)
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/myProducts',
                element: <Privaterout>
                    <MyProducts/>
                </Privaterout>
            },
            {
                path: '/orderedProduct',
                element: <Privaterout><OrderedProducts></OrderedProducts></Privaterout>
            },
            {
                path: '/brands',
                element: <Categories></Categories>
            },
            {
                path: '/selectedBrand/:id',
                element: <Privaterout><SelectedBrand></SelectedBrand></Privaterout>,
                loader: ({ params }) => fetch(`https://smart-resale-stall-server.vercel.app/allBrandsProducts/${params.id}`),
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/login',
                element: <Login></Login>
            },

        ]

    },
    {
        path: '/dashboard',
        element: <Privaterout><DashboardLayout></DashboardLayout></Privaterout>,
        children: [
            {
                path: '/dashboard',
                element: <Sellers></Sellers>
            },
            {
                path: '/dashboard/buyers',
                element: <Buyers></Buyers>
            },
        ]
    },
    {
        path: '*',
        element: <PageNotFound></PageNotFound>
    }
])