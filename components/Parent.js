import React, {Component} from 'react';
import Child from './Child.js';
import {Platform, Button ,StyleSheet, Text, View ,Alert} from 'react-native';

export class Parent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text : 'PARENT'
        }
        this.childRef = React.createRef();
    }

    changeChild = () =>  {
        this.childRef.current.changeText("CHILD CHANGED FROM PARENT")
    }

    callback = (_text) => {
        this.setState({
            text : _text
        })
    }

    render() {
        return [
            <Child ref={this.childRef} key='0' changeOnParent={this.callback} />,
            <Button title={this.state.text} key='1' onPress={this.changeChild} />
        ]
    }

}

// export default Parent
