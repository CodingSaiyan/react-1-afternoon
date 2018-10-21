import React, { Component } from 'react';

class Sum extends Component {
    constructor() {
        super()

        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    handleChange1(val) {
        this.setState({ number1: val})
    }

    handleChange2(val) {
        this.setState({ number2: val})
    }

    summingUp(a, b) {
        var total = Number(a) + Number(b);
        this.setState({ sum: total })
    }

    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange={(e) => this.handleChange1(e.target.value)}></input>
                <input className="inputLine" onChange={(e) => this.handleChange2(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.summingUp(this.state.number1, this.state.number2)}>Sum it up!</button>
                <span className="resultsBox">Sum: {JSON.stringify(this.state.sum)}</span>
            </div>
            
        )
    }
}

export default Sum;