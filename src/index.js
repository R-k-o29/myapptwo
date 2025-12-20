import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UseState from './Hooks/useState';
import UseEffect from './Hooks/useEffect';
import Card from './props/Card';
import Box from './props/Box';
import File from './styling/File';
import Example3 from './Hooks/example3';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Box/> */}
    {/* <File/> */}
    <Example3/>
  </React.StrictMode>
);
