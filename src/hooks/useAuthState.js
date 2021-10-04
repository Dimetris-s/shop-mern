import { useSelector } from "react-redux"

const useAuthState = () => {
    const isAuth = useSelector(state => state.user.isAuth)
    return isAuth
}

export default useAuthState