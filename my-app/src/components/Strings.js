import React, { Component } from 'react';
import OneString from './OneString';

export default class Strings extends Component {
    render() {
        console.log(this.props);
        return (
            <>
                <h1>{this.props.header}</h1>
                <ul onClick={this.removeElement}>
                    {this.props.strings.map((str) => (
                        <OneString key={str} string={str}></OneString>
                    ))}
                </ul>
            </>
        );
    }

    // removeElement = () => {
    //     const [, ...newArray] = this.state.strings;
    //     this.setState({ strings: newArray });
    // };
}
