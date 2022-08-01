import axios from "axios";
import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../reducer";
import { IAddressData } from "./reduser";


// запрос отправлен
export const ADDRESS_REQUEST = 'ADDRESS_REQUEST';
export type AddressRequestAction ={
  type: typeof ADDRESS_REQUEST;
}
export const addressRequest: ActionCreator<AddressRequestAction> = () => ({
  type: ADDRESS_REQUEST
});

// запрос успешен
export const ADDRESS_REQUEST_SUCCESS = 'ADDRESS_REQUEST_SUCCESS';
export type AddressRequestSuccessAction ={
  type: typeof ADDRESS_REQUEST_SUCCESS;
  data: IAddressData;
}
export const addressRequestSuccess: ActionCreator<AddressRequestSuccessAction> = (data) => ({
  type: ADDRESS_REQUEST_SUCCESS,
  data,
});

// запрос с ошибкой

export const ADDRESS_REQUEST_ERROR = 'ADDRESS_REQUEST_ERROR';
export type AddressRequestErrorAction ={
  type: typeof ADDRESS_REQUEST_ERROR;
  error: string
}
export const addressRequestError: ActionCreator<AddressRequestErrorAction> = (error:string) => ({
  type: ADDRESS_REQUEST_ERROR,
  error,
});


export const addressRequestAsync = (btnChain: string, addressLink: string ) : ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
  dispatch(addressRequest());

  axios.get(`https://api.blockchair.com/${btnChain}/dashboards/address/${addressLink}`).then((resp)=> {
    const data: any = Object.entries(resp.data.data)[0] ;
    const prevData = getState();
    console.log(data)
   dispatch(addressRequestSuccess([...prevData.address.data, {name: addressLink, balance: data[1].address.balance, balanceUsd: data[1].address.balance_usd}]))
  }).catch((error) => {
  dispatch(addressRequestError(String(error)));
  });
}
