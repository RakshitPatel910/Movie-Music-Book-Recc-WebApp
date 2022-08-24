import React from 'react';
import ReactDom from 'react-dom';  
// import { createRoot } from 'react-dom/client';   //2nd method
import './index.css';
import App from './App';

ReactDom.render(<App />, document.getElementById('root'));



// const root = createRoot(document.getElementById('root'));   2nd method
// root.render(<App />)    2nd method


