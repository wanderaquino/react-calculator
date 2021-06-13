import React from "react";
import "../css/Button.css";

export default class Button extends React.Component {
    constructor(props) {
        super(props);
        this.resolveButtonType = this.resolveButtonType.bind(this);
    }
    state = {
        value: this.props.value,
        type: this.props.type,
    }
    resolveButtonType() {
        const primaryType = "button";

        switch (this.props.type) {
            case "OP": {return `${primaryType} operation`}
            case "FN": {return `${primaryType} function`}
            case "NM": {return `${primaryType} number`}
        }
    }
    render () {
    return (
        <div className={this.resolveButtonType(this.props.type)}>
            <span className="button-value">{this.props.value}</span>
        </div>
    )}
};