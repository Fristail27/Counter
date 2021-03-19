import React from 'react';
import { observer } from 'mobx-react';
import s from './DisplayWithInputs.module.css';
import Button from '../Common/button/button';
import CustomizedInputs from '../Common/Input/CustomizedInput';
import { appState } from '../../state/State';

const DisplayWithInputs: React.FC = observer(() => {
  const values = appState;
  const onChangeForMaxValue = (i: number) => {
    appState.changeMaxValue(i);
  }; // обработчик изменения макс инпута
  const onChangeForStartValue = (i: number) => {
    appState.changeStartValue(i);
  }; // обработчик изменения старт инпута
  const onClickSetButtonHandler = () => {
    appState.clickSetButton();
  }; // обработчик нажатия на SET

  const maxValueError =
    values.maxValue <= values.startValue || values.maxValue < 0; // условие для ошибки для поля с макс значением
  const startValueError =
    values.maxValue <= values.startValue || values.startValue < 0; // условие для ошибки для поля со стартовым значением
  const setButtonDisableStatus =
    maxValueError ||
    values.startValue < 0 ||
    values.maxValue === values.startValue;

  return (
    <div className={s.AppLeft}>
      <div className={s.display}>
        <CustomizedInputs
          errorStatus={maxValueError}
          onChange={onChangeForMaxValue}
          value={values.maxValue}
          textValue="Max value:"
        />
        <CustomizedInputs
          errorStatus={startValueError}
          onChange={onChangeForStartValue}
          value={values.startValue}
          textValue="Start value:"
        />
      </div>
      <div className={s.buttons}>
        <Button
          name="Set"
          disabledStatus={
            setButtonDisableStatus || values.setButtonDisableStatus
          }
          actionOnClick={onClickSetButtonHandler}
        />
      </div>
    </div>
  );
});

export default DisplayWithInputs;
