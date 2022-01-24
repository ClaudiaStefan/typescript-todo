import React from 'react';
import './Input.css';

interface Props {
    inputRef: React.RefObject<HTMLInputElement>,
};

const Input: React.FC<Props> = ({ inputRef }) => {
  return (
    <input id="todo-input" ref={inputRef} />
  );
}

export default Input;
