import axios from "axios"
import { URL } from "./redux/FimlsReducer/FilmsReducer"

export const NewYear = new Date().getUTCFullYear() - 1

export const DomName = (item) => {
    const DomName = (item.Name[2] || item.Name[1]).split(" ").join("-").toLowerCase()

    return `/${item.collector[1]}/${item.id}-${DomName}`
}

export const NewfilterInCattegory = (data, category) => {
    return data?.filter(({ year, collector }) => NewYear <= year && collector[0] === category)
}

export const AllfilterInCategory = (data, category) => {
    return data?.filter(({ collector }) => collector[0] === category)
}

export const PostRequire = async (data) => {
    try {
        await axios.post(`${URL}/films-Item`, data)
    } catch (error) {
        console.log('Error >', error)
    }
}