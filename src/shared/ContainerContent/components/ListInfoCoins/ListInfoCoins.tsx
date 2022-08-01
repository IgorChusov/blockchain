import React, { ChangeEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { BlockchainsState } from '../../../../store/blockchains/reduser';
import { RootState } from '../../../../store/reducer';
import { generateRandomString } from '../../../../utils/js/generateRandomIndex';
import { Text } from '../../../universalComponents/Text';
import styles from './listinfocoins.css';
interface IListInfoCoins {
  valueRadio: string;
  changeValueRadio: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickElementItem: (elem: string) => void
}
export function ListInfoCoins(props:IListInfoCoins) {
  const data = useSelector<RootState,BlockchainsState>(state => state.blockchains);
 

  return (
    <div>
      <form className={styles.form} action="">
        <ul className={styles.list}>
          {data.loading && (
            <Text size={24}>Загрузка</Text>
          )}
           {data.error && (
            <Text size={24}>Не удалось получить данные</Text>
          )}
          {data.data.map((elem)=>{
            return (
              <li onClick={()=>{props.onClickElementItem(elem.nameCoin)}} className={styles.item} key={generateRandomString()}>
                <Text className={styles.title} As='h3' size={24}>{elem.nameCoin}</Text>
                <div className={styles.content}>
                  <div className={styles.info}>
                    <Text As='p' size={20}>{`Market price btc: ${elem.marketPriceBtc}`}</Text>
                    <Text As='p' size={20}>{`Market price usd: ${elem.marketPriceUsd}`}</Text>
                    <Text As='p' size={20}>{`Dynamics 24h: ${elem.marketPriceUsdChange24hPercentage}%`}</Text>
                  </div>
                  <div className={styles.inputContent}>
                    <input className='' id={`radio-${elem.nameCoin}`} onChange={(e)=>{props.changeValueRadio(e)}} value={elem.nameCoin} checked={props.valueRadio === elem.nameCoin ? true : false} type="radio" />
                    <label className='' htmlFor={`radio-${elem.nameCoin}`}></label>
                  </div>
                </div>  
              </li>
            )
          })}
        </ul>
      </form>
    
    </div>
  );
}

