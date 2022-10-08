import React, { Children } from 'react';
import { WrapperTodo } from './todo.styled';

export const WrapperList = () => {
  return <WrapperTodo>{Children}</WrapperTodo>;
};
