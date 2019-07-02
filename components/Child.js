import React, {Component} from 'react';
import {Button} from 'react-native';

class Child extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text : "CHILD"
        }
    }

    changeText = (_text) => {
        this.setState({
            text : _text
        })
    }

    render() {
        return (
            <Button onPress={() => this.props.changeOnParent("PARENT CHANGED FROM CHILD")}  title={ this.state.text} />
        )

    }

}

export default Child
