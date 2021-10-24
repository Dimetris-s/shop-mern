import { useLocation } from "react-router";
import { LOGIN_ROUTE } from "../utils/consts";

const useLoginLocation = () => {
	const location = useLocation();
	return location.pathname === LOGIN_ROUTE;
};

export default useLoginLocation;
