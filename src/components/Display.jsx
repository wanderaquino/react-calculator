import React from "react";
import "../css/Display.css"

export default class Display extends React.Component {
    render() {
        return (
            <div className="display">
                <span className="display-value">{this.props.value}</span>
            </div>
    )}
};