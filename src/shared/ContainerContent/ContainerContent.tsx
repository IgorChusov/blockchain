import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addressRequestAsync } from '../../store/address/actions';
import { blockchainsRequestAsync } from '../../store/blockchains/actions';
import { Text } from '../universalComponents/Text';
import { FormAdresses } from './components/FormAdresses';
import { ListInfoCoins } from './components/ListInfoCoins';
import { Result } from './components/Result';

import styles from './containercontent.css';

export function ContainerContent() {
  const [valueRadio, setValueRadio] = useState('');
  const [valueInput, setValueInput] = useState('')
  function changeValue(event: ChangeEvent<HTMLInputElement>) {
    setValueRadio(event?.target.value);
  }
const handleChangeValueInput = (e: ChangeEvent<HTMLInputElement>)=>{
  setValueInput(e.target.value)
}
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(blockchainsRequestAsync())
    
  },[])
const submitAddress = (e:FormEvent) => {
  e.preventDefault();
  dispatch(addressRequestAsync(valueRadio, valueInput))
}
  return (
    <div className={styles.container}>
      <Text className={styles.title} size={24} As='h1'>CoinInfo</Text>
      <Text className={styles.subtitle} size={24} As='h2'>1.Select coin:</Text>
      <ListInfoCoins changeValueRadio={changeValue} onClickElementItem={(element)=>{setValueRadio(element)}} valueRadio={valueRadio} />
      <Text  className={styles.subtitle} size={24} As='h2'>2.Enter address:</Text>
      <FormAdresses valueRadio={valueRadio} valueChange={handleChangeValueInput} valueInput={valueInput} handleSubmit={submitAddress}  />
      <Result />
    </div>
  );
}
