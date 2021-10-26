import Auth from "./pages/Auth";
import Basket from "./pages/Basket";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import {
	BASKET_ROUTE,
	DASHBOARD_ROUTE,
	HOME_ROUTE,
	LOGIN_ROUTE,
	PRODUCT_ROUTE,
	REGISTRATION_ROUTE,
} from "./utils/consts";

export const authRoutes = [
	{
		path: BASKET_ROUTE,
		Component: Basket,
	},
];

export const adminRoutes = [
	{
		path: DASHBOARD_ROUTE,
		Component: Dashboard,
	},
];

export const publicRoutes = [
	{
		path: LOGIN_ROUTE,
		Component: Auth,
	},
	{
		path: REGISTRATION_ROUTE,
		Component: Auth,
	},
	{
		path: HOME_ROUTE,
		Component: Home,
		exact: true,
	},
	{
		path: PRODUCT_ROUTE + "/:id",
		Component: ProductPage,
	},
];
