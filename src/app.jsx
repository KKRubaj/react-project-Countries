import React from 'react';
import ReactDOM from 'react-dom';

require('./scss/main.scss');
//or
//require('../css/main.css')

import {Hello} from './components/hello.jsx';

class App extends React.Component {
   constructor(props){
     super(props);

   }
   render() {
     return (
     <Hello />
     )
   }
 }

document.addEventListener("DOMContentLoaded", function(){

  ReactDOM.render(
      <App />,
    document.querySelector('#app')
  )

})
