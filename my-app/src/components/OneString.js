import React, { Component } from 'react';

export default class OneString extends Component {
    render() {
        return <li>{this.props.string}</li>;
    }
}
