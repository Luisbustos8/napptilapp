import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "../components/Layout/Layout";
import { DetailPage } from "../features/detailPage/DetailPage";
import { HomeProduct } from "../features/products/HomeProducts";
import { CartProvider } from "../providers/cartProvider";

export const AppRoutes = () => {
    const commonRoutes = [
        {
            path: '/', element: <> 
                <CartProvider>
                    <Layout>
                        <HomeProduct/>
                    </Layout>
                </CartProvider>
            </>
        },
        {
            path: '/:name/:id', element: <>
            <CartProvider>
                <Layout>
                    <DetailPage />
                </Layout>
            </CartProvider>
            </>
        },
        
    ]

    const router = createBrowserRouter(commonRoutes)

    return <RouterProvider router={router}><Layout /></RouterProvider>
} 