import Auth from "./pages/Auth/Auth"
import Basket from "./pages/Basket/Basket"
import Dashboard from "./pages/Dashboard/Dashboard"
import Home from "./pages/Home/Home"
import ProductPage from "./pages/ProductPage/ProductPage"
import { BASKET_ROUTE, DASHBOARD_ROUTE, HOME_ROUTE, LOGIN_ROUTE, PRODUCT_ROUTE, REGISTRATION_ROUTE } from "./utils/consts"

export const authRoutes = [
    {
        path: DASHBOARD_ROUTE,
        Component: Dashboard
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    }
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: HOME_ROUTE,
        Component: Home,
        exact: true
    },
    {
        path: PRODUCT_ROUTE + '/:id',
        Component: ProductPage
    },
]