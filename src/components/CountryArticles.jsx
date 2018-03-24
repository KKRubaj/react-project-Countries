import React from 'react';
import ReactDOM from 'react-dom';

export class CountryArticles extends React.Component {
   constructor(props){
     super(props);

     // this.state = {
     //   articles: this.props.articles
     // }

   }

   // componentWillReceiveProps(nextProps) {
   //   console.log("nextProps", nextProps);
   //   this.setState({
   //     articles: nextProps.articles
   //   })
   //
   // }

   render() {
     console.log("TEST-Articles", this.props.articles);

      if ( this.props.articles.length) {
        return(
          <div className="articles">
            <h3>New York Times Articles:</h3>
            {this.props.articles.map((art, index) => {
              return(
                <ul key={index}>
                  <li className="article">
                    <a href={art.web_url} target="_blank">{art.headline.main}</a>
                    <p>{art.snippet}</p>
                  </li>
                </ul>
              );
            })}
          </div>
        )
      } else {
        return null;
      }
   }
 }

 /*
 render() {
   let articlesAboutCountry = this.props.articles.map((art, index) => {
     return(
       <ul key={index}>
         <li className="article">
           <a href={art.web_url} target="_blank">{art.headline.main}</a>
           <p>{art.snippet}</p>
         </li>
       </ul>
     );
   });

   return (
     <div className="articles">
       <h3>New York Times Articles:</h3>
       {articlesAboutCountry}
     </div>
   )
 }
}
*/
