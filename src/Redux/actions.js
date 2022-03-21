import { Delete } from '@mui/icons-material';
import axios from 'axios';
export const GET_PRODUCTS = "GET_PRODUCTS"
export const SEARCH_PRODUCTS = "SEARCH_PRODUCTS"
export const GET_DETAILS = "GET_DETAILS"
export const ADD_CART = "ADD_CART"
export const CLEAR_CART = "CLEAR_CART"
export const DELETE_ONE_ITEM_FROM_CART = "DELETE_ONE_ITEM_FROM_CART"
export const SET_USER = "SET_USER"

export function getAllProducts() {

  return async function (dispatch) {
    try {
      var json = await axios.get("http://localhost:3000/api/products");
      return dispatch({
        type: "GET_PRODUCTS",
        payload: json.data,
      });
    } catch (e) {
      console.log(e)
    }
  }
}

export function searchProduct(search) {

  return async function (dispatch) {
    try {
      let busqueda = await axios.get("http://localhost:3000/api/products/name/" + search)
      return dispatch({
        type: SEARCH_PRODUCTS,
        payload: busqueda.data
      })
    } catch (error) {
      console.log(error)
    }
  }

}

export function detailProduct(id) {
  return async function (dispatch) {
    try {
      let detail = await axios.get("http://localhost:3000/api/products/id/" + id)
      return dispatch({
        type: GET_DETAILS,
        payload: detail.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export function addCart(product){
  //console.log(product)
  return function (dispatch){
  try{
    return dispatch({
      type: ADD_CART,
      payload: product, 
      })
    } catch(e) {console.log(e)}
  }
}

export function clearCart(){
  return function(dispatch){
    try{
      return dispatch({
        type:   CLEAR_CART,        
      })
    }catch(e) { console.log(e) }
  }
}

  export function deleteOneItemFromCart(id){
    return function(dispatch){
      try{
        return dispatch({
          type: DELETE_ONE_ITEM_FROM_CART,
          payload: id,

        })       

      }catch(e){console.log(e)}
    } 
  }

export function userGmail(user){
return function(dispatch){
  try{
    return dispatch({
      type: SET_USER,
      payolad:user,
    })
  }catch(e){
    console.log(e)

  }
}
}
