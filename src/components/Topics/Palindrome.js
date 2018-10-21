import React, { Component } from 'react';

class Palindrome extends Component {
   constructor () {
       super()

   this.state = {
       userInput: "",
       palindrome: "",
   }
   }

   handleChange(e){
       this.setState({userInput: e})
   }

   ifSame(str){
   var test = str.split("");
   var reverse = test.reverse();
   reverse = reverse.join("");
   if(str === reverse){
       this.setState({palindrome: str})
   }else {
       this.setState({palindrome: "Try again"})
   }

   }

   render() {
       return (
         <div className= "puzzleBox filterStringPB">
             <h4>Palindrome</h4>
             <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}></input>
             <button className="confirmationButton" onClick={() => this.ifSame(this.state.userInput)}>Submit</button>
             <span className="resultsBox">Palindrome:{JSON.stringify(this.state.palindrome)}</span>
         </div>

       );
    }


}

export default Palindrome;