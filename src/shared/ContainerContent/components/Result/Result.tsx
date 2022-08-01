import React from 'react';
import { useSelector } from 'react-redux';
import { AddressState } from '../../../../store/address/reduser';
import { RootState } from '../../../../store/reducer';
import { generateRandomString } from '../../../../utils/js/generateRandomIndex';
import { Text } from '../../../universalComponents/Text';
import styles from './result.css';

export function Result() {
  const data = useSelector<RootState, AddressState>(state => state.address);
  return (
    <div className={styles.container}>
      <div className={styles.containerError}>
        {data.loading && (
          <Text size={20}>Загрузка</Text>
        )}
          {data.error && (
          <Text size={20}>{`Ошибка при получении данных : ${data.error}`}</Text>
        )}
        </div>
        <ul>
        {data.data.map((elem)=>{
          return (
            <li className={styles.item} key={generateRandomString()}>
              <Text className={styles.itemTitle} As='h3' size={16}>{`Address: ${elem.name}`}</Text>
              <Text As='p' size={16}>{`Balance: ${elem.balance}`}</Text>
              <Text As='p' size={16}>{`Balance Usd: ${elem.balanceUsd}`}</Text>
            </li> 
          )
        })}
        </ul>
    </div>
  );
}
