import axios from "axios";

const API_URL = 'https://api.fastforex.io'

const defaultParams = {
    api_key: 'c38ca768bf-88d319401d-reymjw'
}

export const getOne = (from: string) => {
    const params = {
        ...defaultParams,
        from,
        to: 'UAH'
    }
    return axios.get(`${API_URL}/fetch-one`, {params})
}

export const getAll = () => {
    const params = {
        ...defaultParams,
    }
    return axios.get(`${API_URL}/fetch-all`, {params})
}

export default {
    getOne,getAll
}
