import React from "react";
import "../css/Button.css";

export default class Button extends React.Component {
    state = {
        value: this.props.value,
        type: this.props.type,
        double: this.props.double
    }

    render () {
    return (
        <button 
            className={`button ${this.props.type} ${this.props.double ? 'double' : '' }`}
            onClick={e => this.props.click && this.props.click(this.props.value)}
        >
            {this.props.value}
        </button>
    )}
};