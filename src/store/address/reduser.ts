import { Reducer } from "react";
import { AddressRequestAction, AddressRequestErrorAction, AddressRequestSuccessAction, ADDRESS_REQUEST, ADDRESS_REQUEST_ERROR, ADDRESS_REQUEST_SUCCESS } from "./actions";

export type IAddressData = {
  name: string;
  balance: number;
  balanceUsd: number
}[]

export type AddressState = {
  loading: boolean,
  error: string,
  data: IAddressData,
}

type AddressActions = AddressRequestAction 
| AddressRequestSuccessAction 
| AddressRequestErrorAction


export const addressReducer: Reducer<AddressState, AddressActions> = (state, action) => {
  switch(action.type) {
    case ADDRESS_REQUEST:
      return {
        ...state,
        loading: true,
      }
      case ADDRESS_REQUEST_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      }
      case ADDRESS_REQUEST_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.data, 
          error: '',
        }
      default:
        return state
  }
}
