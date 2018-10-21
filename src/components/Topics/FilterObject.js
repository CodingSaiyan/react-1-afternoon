import React, { Component } from 'react';

class FilterObjects extends Component {
   constructor () {
       super()

   this.state = {
       students: [
       {
           name: 'Johnny',
           grade: 2,
           favoriteClass: 'science'
       },
       {
           name: "Marsha",
           age: 13,
           favoriteColor: 'pink'
       },
       {
           name: 'Cindy',
           hairColor: 'brown',
           favoriteBook: 'Harry Potter'
       }
       ],
       userInput: '',
       filteredArray: []
   }

}
   handleChange (val) {
       this.setState({userInput: val})
   }

   filterThroughObjects (prop) {
       var students= this.state.students;
       console.log(students)
       var filteredArray = students.filter((obj) => obj.hasOwnProperty(prop));

       this.setState ( {filteredArray: filteredArray });
}



   render() {
       return (
          <div className="puzzleBox filterObjectPB">
              <h4>Filter Object </h4>
              <span className="puzzleText"> Original: {JSON.stringify(this.state.students, null, 10)}</span>
              <input className="inputLine" onChange={(e) => this.handleChange (e.target.value ) }></input>
              <button className="confirmationButton" onClick={() => this.filterThroughObjects (this.state.userInput)}> Filter </button>
              <span className="resultsBox filterObjectRB"> FIltered: {JSON.stringify(this.state.filteredArray, null, 10)} </span>
        </div>
       )
    }
}

export default FilterObjects;