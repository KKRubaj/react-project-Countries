import React from 'react';
import ReactDOM from 'react-dom';

export class CountryPhoto extends React.Component {
   constructor(props){
     super(props);

   }
   render() {
     return (
       <figure className="country-image">
         <img src={this.props.photo.url}></img>
       </figure>
     )
   }
 }
