import axios from "axios";
import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../reducer";
import { IBlockchainsData } from "./reduser";


// запрос отправлен
export const BLOCKCHAINS_REQUEST = 'BLOCKCHAINS_REQUEST';
export type BlockchainsRequestAction ={
  type: typeof BLOCKCHAINS_REQUEST;
}
export const blockchainsRequest: ActionCreator<BlockchainsRequestAction> = () => ({
  type: BLOCKCHAINS_REQUEST
});

// запрос успешен
export const BLOCKCHAINS_REQUEST_SUCCESS = 'BLOCKCHAINS_REQUEST_SUCCESS';
export type BlockchainsRequestSuccessAction ={
  type: typeof BLOCKCHAINS_REQUEST_SUCCESS;
  data: IBlockchainsData;
}
export const blockchainsRequestSuccess: ActionCreator<BlockchainsRequestSuccessAction> = (data:IBlockchainsData) => ({
  type: BLOCKCHAINS_REQUEST_SUCCESS,
  data,
});

// запрос с ошибкой

export const BLOCKCHAINS_REQUEST_ERROR = 'BLOCKCHAINS_REQUEST_ERROR';
export type BlockchainsRequestErrorAction ={
  type: typeof BLOCKCHAINS_REQUEST_ERROR;
  error: string
}
export const blockchainsRequestError: ActionCreator<BlockchainsRequestErrorAction> = (error:string) => ({
  type: BLOCKCHAINS_REQUEST_ERROR,
  error,
});


export const blockchainsRequestAsync = () : ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
  dispatch(blockchainsRequest());
  axios.get('https://api.blockchair.com/stats').then((resp)=> {
    const data = resp.data.data;
   dispatch(blockchainsRequestSuccess([
     {nameCoin: 'bitcoin',
      marketPriceUsd: data.bitcoin.data.market_price_usd, 
      marketPriceBtc: data.bitcoin.data.market_price_btc,
      marketPriceUsdChange24hPercentage: data.bitcoin.data.market_price_usd_change_24h_percentage
    },
     {nameCoin: 'ethereum',
        marketPriceUsd: data.ethereum.data.market_price_usd, 
        marketPriceBtc:data.ethereum.data.market_price_btc, 
        marketPriceUsdChange24hPercentage: data.ethereum.data.market_price_usd_change_24h_percentage
      },
     {nameCoin: 'dogecoin',
        marketPriceUsd: data.dogecoin.data.market_price_usd, 
        marketPriceBtc:data.dogecoin.data.market_price_btc, 
        marketPriceUsdChange24hPercentage: data.dogecoin.data.market_price_usd_change_24h_percentage
      },
     {nameCoin: 'cardano',
        marketPriceUsd: data.cardano.data.market_price_usd,
        marketPriceBtc:data.cardano.data.market_price_btc, 
        marketPriceUsdChange24hPercentage: data.cardano.data.market_price_usd_change_24h_percentage
      },
     {nameCoin: 'dash', 
        marketPriceUsd: data.dash.data.market_price_usd, 
        marketPriceBtc:data.dash.data.market_price_btc, 
        marketPriceUsdChange24hPercentage: data.dash.data.market_price_usd_change_24h_percentage
      },
     {nameCoin: 'ecash',
        marketPriceUsd: data.ecash.data.market_price_usd, 
        marketPriceBtc:data.ecash.data.market_price_btc, 
        marketPriceUsdChange24hPercentage: data.ecash.data.market_price_usd_change_24h_percentage
      },
     {nameCoin: 'eos',
        marketPriceUsd: data.eos.data.market_price_usd, 
        marketPriceBtc:data.eos.data.market_price_btc, 
        marketPriceUsdChange24hPercentage: data.eos.data.market_price_usd_change_24h_percentage
      },
     {nameCoin: 'groestlcoin',
        marketPriceUsd: data.groestlcoin.data.market_price_usd, 
        marketPriceBtc:data.groestlcoin.data.market_price_btc, 
        marketPriceUsdChange24hPercentage: data.groestlcoin.data.market_price_usd_change_24h_percentage
      },
     {nameCoin: 'kusama',
        marketPriceUsd: data.kusama.data.market_price_usd, 
        marketPriceBtc:data.kusama.data.market_price_btc, 
        marketPriceUsdChange24hPercentage: data.kusama.data.market_price_usd_change_24h_percentage
      },
     {nameCoin: 'litecoin',
        marketPriceUsd: data.litecoin.data.market_price_usd, 
        marketPriceBtc:data.litecoin.data.market_price_btc, 
        marketPriceUsdChange24hPercentage: data.litecoin.data.market_price_usd_change_24h_percentage
      },
     {nameCoin: 'mixin',
        marketPriceUsd: data.mixin.data.market_price_usd, 
        marketPriceBtc:data.mixin.data.market_price_btc, 
        marketPriceUsdChange24hPercentage: data.mixin.data.market_price_usd_change_24h_percentage
      },
     {nameCoin: 'monero',
        marketPriceUsd: data.monero.data.market_price_usd, 
        marketPriceBtc:data.monero.data.market_price_btc, 
        marketPriceUsdChange24hPercentage: data.monero.data.market_price_usd_change_24h_percentage
      },
     {nameCoin: 'polkadot',
        marketPriceUsd: data.polkadot.data.market_price_usd, 
        marketPriceBtc:data.polkadot.data.market_price_btc,
        marketPriceUsdChange24hPercentage: data.polkadot.data.market_price_usd_change_24h_percentage
      },
     {nameCoin: 'ripple',
        marketPriceUsd: data.ripple.data.market_price_usd, 
        marketPriceBtc:data.ripple.data.market_price_btc, 
        marketPriceUsdChange24hPercentage: data.ripple.data.market_price_usd_change_24h_percentage
      },
     {nameCoin: 'solana', 
        marketPriceUsd: data.solana.data.market_price_usd, 
        marketPriceBtc:data.solana.data.market_price_btc, 
        marketPriceUsdChange24hPercentage: data.solana.data.market_price_usd_change_24h_percentage
      },
     {nameCoin: 'stellar',
        marketPriceUsd: data.stellar.data.market_price_usd, 
        marketPriceBtc:data.stellar.data.market_price_btc, 
        marketPriceUsdChange24hPercentage: data.stellar.data.market_price_usd_change_24h_percentage
      },
     {nameCoin: 'zcash',
        marketPriceUsd: data.zcash.data.market_price_usd, 
        marketPriceBtc:data.zcash.data.market_price_btc, 
        marketPriceUsdChange24hPercentage: data.zcash.data.market_price_usd_change_24h_percentage
      },
    ]))
  }).catch((error) => {
  dispatch(blockchainsRequestError(String(error)));
  });
}
