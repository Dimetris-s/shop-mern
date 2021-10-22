import axios from "axios"


const instance = axios.create({
    baseURL: "http://localhost:3001"
})

export default instance

export const getBasketByUserId = async id => {
    const {data} = await instance.get(`/baskets?user_id=${id}`)
    return data[0]
}