import createStore from "unistore";
import axios from "axios";


const initialState = {
    is_login: false,
}


export const store = createStore(initialState)

export const actions = store => ({
    postLogout: state => {
        return { is_login: false };
    },
})