import http from "./axiosConfig"

const authenfication = (data) => {
    return http.post('authentification', data)
}

const ligneOperationList = () => {
    return http.get('ligneOperationList')
}

const ligneOperationAdd = (data) => {
    return http.post('ligneOperationAdd', data)
}

const auth = {
    authenfication,
    ligneOperationList,
    ligneOperationAdd
}

export default auth