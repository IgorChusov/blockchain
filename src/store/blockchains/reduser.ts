import { Reducer } from "react";
import { BlockchainsRequestAction, BlockchainsRequestErrorAction, BlockchainsRequestSuccessAction, BLOCKCHAINS_REQUEST, BLOCKCHAINS_REQUEST_ERROR, BLOCKCHAINS_REQUEST_SUCCESS } from "./actions";

export type IBlockchainsData = {
  nameCoin: string;
  marketPriceUsd: number;
  marketPriceBtc: number;
  marketPriceUsdChange24hPercentage: number;
}[]

export type BlockchainsState = {
  loading: boolean,
  error: string,
  data: IBlockchainsData,
}

type BlockchainsActions = BlockchainsRequestAction 
| BlockchainsRequestSuccessAction 
| BlockchainsRequestErrorAction


export const blockchainsReducer: Reducer<BlockchainsState, BlockchainsActions> = (state, action) => {
  switch(action.type) {
    case BLOCKCHAINS_REQUEST:
      return {
        ...state,
        loading: true,
      }
      case BLOCKCHAINS_REQUEST_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      }
      case BLOCKCHAINS_REQUEST_SUCCESS:
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
