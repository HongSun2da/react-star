import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';

import App from './App';
import Use_State from './Use_State';
import Use_State2 from './Use_State2';
import Use_Effect from './Use_Effect';
import Use_Effect2 from './Use_Effect2';
import Use_Ref from './Use_Ref';
import Use_Ref2 from './Use_Ref2';
import Use_Ref3 from './Use_Ref3';
import Use_Ref4 from './Use_Ref4';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <div>
      <App />
      <Use_State />
      <Use_State2 />
      <Use_Effect />
      <Use_Effect2 />
      <Use_Ref />
      <Use_Ref2 />
      <Use_Ref3 />
      <Use_Ref4 />
    </div>
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
