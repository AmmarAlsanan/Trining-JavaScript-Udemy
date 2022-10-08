import React from 'react';
import { TodoReducer } from './todoReducer';
import { WrapperList } from './wapperList';

const initalstate = [{ id: 0, text: 'Visit Kafka Museum', done: true }];
let nextid = 1;

export const Todo = () => {
  const [tasks, dispatch] = React.useReducer(TodoReducer, initalstate);

  const handleAddTask = (text) => {
    dispatch({
      type: 'add',
      text: text,
      id: nextid++,
    });
  };

  const handleChangeTask = (task) => {
    dispatch({
      type: 'change',
      task: task,
    });
  };

  const handleDeleteTask = (id) => {
    dispatch({
      type: 'delete',
      id: id,
    });
  };

  return <WrapperList>jdjdj</WrapperList>;
};
