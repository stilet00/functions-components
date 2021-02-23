import React, { Component } from 'react';

export default class Timer extends Component {
    state = {
        counts: 0,
    };

    render() {
        console.log('Timer rendering');
        return <div>{this.state.counts}</div>;
    }

    constructor() {
        super();
        console.log('Timer Constructing');
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState({ counts: ++this.state.counts });
        }, 1000);
    }

    componentDidUpdate() {
        console.log('Timer updated');
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }
}
