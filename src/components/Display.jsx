import React from "react";
import "../css/Display.css"

export default class Display extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        value: this.props.value
    }

    render() {
        const {value} = this.state;
        return (
            <div className="display">
                <span className="display-value">{this.props.value}</span>
            </div>
    )}
};