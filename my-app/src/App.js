import React, { Component } from 'react';
import Strings from './components/Strings';
import Timer from './components/Timer';

export default class App extends Component {
    state = {
        todos: [
            {
                id: 1,
                title: 'jkhasgdjkfhg',
                completed: false,
            },
            {
                id: 2,
                title: ';;;l',
                completed: false,
            },
            {
                id: 3,
                title: 'yeyyyer',
                completed: true,
            },
        ],
    };

    constructor() {
        super();
        console.log('App Constructing');
    }

    render() {
        console.log('App rendering');
        return (
            <div>
                {this.state.visible ? <Timer /> : null}
                <button onClick={this.onClick}>
                    {this.state.visible ? 'Hide' : 'Show'}
                </button>
                <Strings strings={this.state.strings} />
            </div>
        );
    }

    componentDidMount() {
        console.log('App mounted');
    }

    componentDidUpdate() {
        console.log('App updated');
    }

    componentWillUnmount() {
        console.log('App unmounted');
    }

    onClick = () => {
        this.setState({ visible: !this.state.visible });
    };
}
