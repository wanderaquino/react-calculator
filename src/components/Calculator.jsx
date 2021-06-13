import "../css/Calculator.css";
import React from "react";
import Display from "./Display";
import Button from "./Button";

export default class Calculator extends React.Component {
    render() {
        return (
            <div className="calculator">
                <Display value="0"></Display>
                <Button value="AC" type="function"></Button>
                <Button value="+/-" type="function"></Button>
                <Button value="%" type="function"></Button>
                <Button value="/" type="operation"></Button>
                <Button value="7" type="number"></Button>
                <Button value="8" type="number"></Button>
                <Button value="9" type="number"></Button>
                <Button value="*" type="operation"></Button>
                <Button value="4" type="number"></Button>
                <Button value="5" type="number"></Button>
                <Button value="6" type="number"></Button>
                <Button value="-" type="operation"></Button>
                <Button value="1" type="number"></Button>
                <Button value="2" type="number"></Button>
                <Button value="3" type="number"></Button>
                <Button value="+" type="operation"></Button>
                <Button value="0" type="number" double="double"></Button>
                <Button value="." type="number"></Button>
                <Button value="=" type="number"></Button>
                {/* Demais componentes, como display, botões etc. */}
            </div>
        )
    }
}