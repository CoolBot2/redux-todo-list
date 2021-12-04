import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider} from 'react-redux'
import store from './redux/Store';


// const inc= ()=>{
//   return{
//     type: 'INCREMENT'

//   }
// }
// const dec= ()=>{
//   return{
//     type: 'DECREMENT'

//   }
// }
// //REDUCER
// const Counter =(state = 0, action)=>{
//   switch(action.type){
//     case ('INCREMENT'):
//       return state+1;
//       brea
//     case ('DECREMENT'):
//       return state-1;
//       break;
//   }
  
// }


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >


    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


