import axios from "axios"
export const GetData = () => {
    return new Promise((resolve, reject) => {
        axios.get("/api/data").then((data) => {
            resolve(data.data)
        })
    })
}