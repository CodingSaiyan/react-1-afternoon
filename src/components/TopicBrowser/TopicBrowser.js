import React, { Component } from 'react';
import EvenAndOdd from '../Topics/EvenAndOdd';
import FilterObjects from '../Topics/FilterObject';
import FilterStrings from '../Topics/FilterString';
import Palindrome from '../Topics/Palindrome';
import Sum from '../Topics/Sum';

class TopicBrowser extends Component {
    render() {
        return (
            <div>
                <EvenAndOdd />
                <FilterObjects />
                <FilterStrings />
                <Palindrome />
                <Sum />
            </div>
        )
    }
}

export default TopicBrowser;