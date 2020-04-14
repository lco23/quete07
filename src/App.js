import React, { Component } from 'react';
import QuoteCard from "./components/QuoteCard"
import './App.css';
import axios from 'axios';

const exampleQuote = {
   "quote": "Shoplifting is a victimless crime, like punching someone in the dark.",
   "character": "Nelson Muntz",
   "image" : "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
   "characterDirection" : "Left"
  }

          
class App extends Component{
 constructor(props){
   super(props)
    this.state ={
      quote: exampleQuote
    }
    this.getQuote = this.getQuote.bind(this);
 }

 getQuote (){
   axios.get("https://thesimpsonsquoteapi.glitch.me/quotes")
    .then(response=>response.data)
      .then(data=>{
        this.setState({
          quote:data[0],
    })
  })
 }


 render (){ 
  return (
    <div className="App">
      <QuoteCard quote={this.state.quote}/>
      <button type= "button" onClick={this.getQuote}>New Quote</button>
    </div>
  );
}
}

export default App;
