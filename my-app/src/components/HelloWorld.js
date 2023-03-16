import React, { Component } from 'react';

export default class HelloWorld extends Component {
    constructor(props) {
        super(props);
        this.state = {
            today: new Date(),
            myname: "Yudhistira Kusuma"
        };
    }
    
    render() {
        return (
            <div>
                <h1>Today is {this.state.today.toTimeString()}</h1>
                <h1>Hello my name is {this.state.myname}</h1>
            </div>
        )
    }
}