import React from 'react';
import './Add.css';
import Button from './Button';
import Input from './Input';

interface Props {
  inputRef: React.RefObject<HTMLInputElement>,
  onClick: () => void,
};

const Add: React.FC<Props> = ({ inputRef, onClick }) => {
  return (
    <div id="todo-add-section">
        <Input inputRef={inputRef} /> <Button text="Add" onClick={onClick}/>
    </div>
  );
}

export default Add;