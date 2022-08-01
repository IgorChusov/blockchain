import React, { ChangeEvent, FormEvent, MutableRefObject } from 'react';
import styles from './formadresses.css';
interface IFormAdressess {
  valueInput: string;
  valueChange: (e:ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e:FormEvent) => void;
  valueRadio: string;
}
export function FormAdresses(props:IFormAdressess) {
  return (
    <form className={styles.form} onSubmit={props.handleSubmit} action="">
      <div className={styles.inputGroup}>
        <input onChange={props.valueChange} value={props.valueInput} className={styles.input} type="text" />
        <button disabled={props.valueRadio === '' ? true : false} className={styles.btn}>Получить баланс</button>
      </div>
    </form>
  );
}
