import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UseState from './Hooks/useState';
import UseEffect from './Hooks/useEffect';
import Card from './props/Card';
import Box from './props/Box';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Box/>
  </React.StrictMode>
);
