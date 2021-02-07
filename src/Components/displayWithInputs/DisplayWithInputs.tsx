import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './DisplayWithInputs.module.css';
import Button from '../Common/button/button';
import CustomizedInputs from '../Common/Input/CustomizedInput';
import { AppRootStateType } from '../../state/Store';
import {
  changeMaxValueAC,
  changeStartValueAC,
  clickSetButtonAC,
  InitialStateType,
} from '../../state/Counter-reducer';

const DisplayWithInputs: React.FC = () => {
  const values = useSelector<AppRootStateType, InitialStateType>(
    (state) => state.values
  );
  const dispatch = useDispatch();

  const onChangeForMaxValue = (i: number) => {
    dispatch(changeMaxValueAC(i));
  }; // обработчик изменения макс инпута
  const onChangeForStartValue = (i: number) => {
    dispatch(changeStartValueAC(i));
  }; // обработчик изменения старт инпута

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
          actionOnClick={() => dispatch(clickSetButtonAC())}
        />
      </div>
    </div>
  );
};

export default DisplayWithInputs;
