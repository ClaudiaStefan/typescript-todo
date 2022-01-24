import React from 'react';
import './Title.css';

interface Props {
    appTitle: string;
};

const Title: React.FC<Props> = ({ appTitle }) => {
  return (
    <header id="app-title">
        {appTitle}
    </header>
  );
}

export default Title;
