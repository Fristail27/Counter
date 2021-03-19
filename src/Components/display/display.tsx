import React from 'react';
import { observer } from 'mobx-react';
import s from './display.module.css';
import Button from '../Common/button/button';
import { appState } from '../../state/State';

const Display: React.FC = observer(() => {
  const values = appState;

  const maxValueError =
    values.maxValue <= values.startValue || values.maxValue < 0; // условие для ошибки для поля с макс значением
  const startValueError =
    values.maxValue <= values.startValue || values.startValue < 0; // условие для ошибки для поля со стартовым значением

  const displayValue = (valueCounter: number) => {
    if (!values.setButtonDisableStatus) {
      return 'Введите значения и нажмите SET';
    }
    if (Number.isNaN(valueCounter)) {
      return 'Введите корректное значение';
    }
    if (maxValueError || startValueError) {
      return 'Введите корректное значение';
    }
    return valueCounter;
  }; // фция возвращает или значение счетчика или текст ошибки

  const value = displayValue(values.currentValue);

  const addButtonStatus =
    values.currentValue >= values.maxValue ||
    value === 'Введите значения и нажмите SET'; // дисейбл для кнопки адд
  const resetButtonStatus =
    values.currentValue <= values.startValue ||
    value === 'Введите значения и нажмите SET'; // дисейбл для кн ресет

  let red = '';
  if (value === values.maxValue) {
    red = s.red;
  }

  return (
    <div className={s.AppRight}>
      <div className={s.display}>
        <div className={red}>
          <div>{value}</div>
        </div>
      </div>
      <div className={s.buttons}>
        <Button
          name="Add"
          disabledStatus={addButtonStatus}
          actionOnClick={() => appState.increaseValue()}
        />
        <Button
          name="Reset"
          disabledStatus={resetButtonStatus}
          actionOnClick={() => appState.resetCurrentValue()}
        />
      </div>
    </div>
  );
});

export default Display;
