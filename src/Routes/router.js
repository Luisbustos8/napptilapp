import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DetailPage } from "../features/detailPage/DetailPage";
import { HomeProduct } from "../features/products/HomeProducts";

export const AppRoutes = () => {
    const commonRoutes = [
        {
            path: '/', element: <HomeProduct />
        },
        {
            path: '/:name/:id', element: <DetailPage />
        },
    ]

    const router = createBrowserRouter(commonRoutes)

    return <RouterProvider router={router} />
} 