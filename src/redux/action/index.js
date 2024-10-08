import { type } from "@testing-library/user-event/dist/type"

export const addCart = (product) => {
    return{
        type : "ADDITEM",
        payload : product
    }
}

export const delCart = (product) => {
    return{
        type : "DELITEM",
        payload : product
    }
}