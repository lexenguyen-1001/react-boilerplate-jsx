import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase, ROOT_STATE_NAME } from './couterSlice';
import { CounterWrapper } from './styles';

const Counter = () => {
  const { data } = useSelector((state) => state[ROOT_STATE_NAME]);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increase({ data: 1 }));
  };
  const handleDecrease = () => {
    dispatch(decrease({ data: 1 }));
  };

  return (
    <CounterWrapper>
      <button type='button' onClick={handleIncrease}>
        +
      </button>
      <input type='text' value={data} readOnly />
      <button type='button' onClick={handleDecrease}>
        -
      </button>
    </CounterWrapper>
  );
};

export default Counter;
