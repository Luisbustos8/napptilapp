import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "../components/Layout/Layout";
import { DetailPage } from "../features/detailPage/DetailPage";
import { HomeProduct } from "../features/products/HomeProducts";

export const AppRoutes = () => {
    const commonRoutes = [
        {
            path: '/', element: <> <Layout><HomeProduct/></Layout></>
        },
        {
            path: '/:name/:id', element: <><Layout><DetailPage /></Layout></>
        },
    ]

    const router = createBrowserRouter(commonRoutes)

    return <RouterProvider router={router}><Layout /></RouterProvider>
} 