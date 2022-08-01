import { Reducer } from "redux";
import { AddressRequestAction, AddressRequestErrorAction, AddressRequestSuccessAction, ADDRESS_REQUEST, ADDRESS_REQUEST_ERROR, ADDRESS_REQUEST_SUCCESS } from "./address/actions";
import { addressReducer, AddressState } from "./address/reduser";
import { BlockchainsRequestAction, BlockchainsRequestErrorAction, BlockchainsRequestSuccessAction, BLOCKCHAINS_REQUEST, BLOCKCHAINS_REQUEST_ERROR, BLOCKCHAINS_REQUEST_SUCCESS } from "./blockchains/actions";
import { blockchainsReducer, BlockchainsState } from "./blockchains/reduser";

export type RootState = {
  blockchains:  BlockchainsState;
  address: AddressState
}
const initialState: RootState = {
  blockchains: {
    loading: false,
    error: '',
    data: []
  },
  address: {
    loading: false,
    error: '',
    data: []
  },
}
type BlockchainsAction = BlockchainsRequestAction 
| BlockchainsRequestSuccessAction 
| BlockchainsRequestErrorAction |
AddressRequestAction 
| AddressRequestSuccessAction 
| AddressRequestErrorAction



export const rootReducer: Reducer<RootState, BlockchainsAction> = (state = initialState, action) => {
  switch(action.type) {
        case BLOCKCHAINS_REQUEST:
        case BLOCKCHAINS_REQUEST_SUCCESS:
        case BLOCKCHAINS_REQUEST_ERROR:
            return {
              ...state,
              blockchains: blockchainsReducer(state.blockchains, action),
            }
        case ADDRESS_REQUEST:
        case ADDRESS_REQUEST_SUCCESS:
        case ADDRESS_REQUEST_ERROR:
          return {
            ...state,
            address: addressReducer(state.address, action),
            }
        default: 
          return state
  }

}
