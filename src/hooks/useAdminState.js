import { useSelector } from "react-redux"

const useAdminState = () => {
    const user = useSelector(state => state.user.user)
    return user.isAdmin
}

export default useAdminState