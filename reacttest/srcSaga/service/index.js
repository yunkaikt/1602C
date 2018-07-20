import axios from "axios"
export const GetNum = () => {
    return new Promise((resolve, reject) => {
        axios.get("/api/num").then((data) => {
            resolve(data.data.data)
        })
    })
}