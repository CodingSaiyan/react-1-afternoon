import React, { Component } from 'react';

class FilterString extends Component {
   constructor () {
       super()

   this.state = {
       pets:['dog', 'cat', 'fish', 'bird', 'hamster'],
       userInput: "",
       filteredArray: []
   }
}

   handleChange(e) {
       this.setState({userInput: e})
   }

   filterThroughString(userInput){
       var pets = this.state.pets;
   var nicePets = pets.filter ((pet) => pet !== userInput );

   this.setState( {filteredArray: nicePets});
   }


    render() {
       return (
         <div className="puzzleBox filterStringPB">
             <h4>Filter Strings</h4>
             <span className="puzzleText"></span>
             <input className="inputLine" onChange={(e) => this.handleChange(e.target.value )}></input>
             <button className="confirmationButton" onClick={() => this.filterThroughString(this.state.userInput) }>Filter</button>
             <span className="resultsBox filterStringRB">Filter:{JSON.stringify(this.state.filteredArray)}</span>
         </div>

       );
    }


}

export default FilterString;