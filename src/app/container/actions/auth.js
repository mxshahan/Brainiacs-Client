
export const LoginUser = (payload) => {
    return dispatch => {
        const url = endpoint.login;
        return new Promise((resolve, reject) => {
            api.post(url, payload).then((res) => {
                dispatch(SetUser(res.data))
                resolve(res)
            }, error => {
                reject(error)
            })
        })
    }
}