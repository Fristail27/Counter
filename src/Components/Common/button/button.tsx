import React from 'react';
import s from './button.module.css';

type ButtonType = {
  actionOnClick: () => void;
  disabledStatus: boolean;
  name: string;
};
/* eslint-disable react/prop-types */
const Button: React.FC<ButtonType> = ({
  actionOnClick,
  disabledStatus,
  name,
}) => {
  const onClickHandler = () => {
    actionOnClick();
  };

  return (
    <button
      onClick={onClickHandler}
      className={s.btn}
      disabled={disabledStatus}
      type="button"
    >
      {name}
    </button>
  );
};

export default Button;
