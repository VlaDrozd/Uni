export const host = 'http://localhost:8080';

const api = `${host}/api`;

export const urls = {
    POST_LOGIN: `${api}/auth/login`,
    POST_REGISTER:  `${api}/auth/register`,
    GET_IS_ADMIN: `${api}/auth/isAdmin`,
    GET_CARS_LIST: `${api}/cars/getCarsList`,
    POST_ADD_NEW_CAR: `${api}/cars/addNewCar`,
    GET_CAR_PHOTO: `${api}/photo`,
    POST_ADD_ORDER: `${api}/orders/addOrder`,
    GET_ORDERS_LIST: `${api}/orders/getOrders`,
    GET_FAVOURITES_LIST: `${api}/fav/getFavourites`,
    GET_MY_CARS: `${api}/cars/getMyCars`,
    GET_CAR: `${api}/cars/getCar`,
    DELETE_FAVOURITE: `${api}/fav/deleteFavourite`,
    DELETE_CAR: `${api}/cars/deleteCar`,
    DELETE_ORDER: `${api}/orders/closeOrder`,
    POST_ADD_FAVOURITE: `${api}/fav/addFavourite`
}


