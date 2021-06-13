import "../css/Calculator.css";
import React from "react";
import Display from "./Display";
import Button from "./Button";

export default class Calculator extends React.Component {
    render() {
        return (
            <div className="calculator">
                <Display value="0"></Display>
                <Button value="+" type="OP"></Button>
                <Button value="1" type="NM"></Button>
                <Button value="AC" type="FN"></Button>
                {/* Demais componentes, como display, botões etc. */}
            </div>
        )
    }
}
    