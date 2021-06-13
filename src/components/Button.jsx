import React from "react";
import "../css/Button.css";

export default class Button extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        value: this.props.value,
        type: this.props.type,
        double: this.props.double
    }

    render () {
    return (
        <button className={`button ${this.props.type} ${this.props.double}`} onClick={e => console.log(e.target.value)}>
            {this.props.value}
        </button>
    )}
};