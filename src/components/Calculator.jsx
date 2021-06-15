import "../css/Calculator.css";
import React from "react";
import Display from "./Display";
import Button from "./Button";

export default class Calculator extends React.Component {
    clearMemory = () => {
        console.log("Clear Memory");
    }

    setOperation = (operation) => {
        console.log(`Operation ${operation}`);
    }

    addDigit = (digit) => {
        console.log(`Digit ${digit}`);
    }
    render() {
        return (
            <div className="calculator">
                <Display value="0"></Display>
                <Button value="AC"  click={this.clearMemory} type="function"></Button>
                <Button value="+/-" click={this.setOperation} type="function"></Button>
                <Button value="%" click={this.setOperation} type="function"></Button>
                <Button value="/" click={this.setOperation} type="operation"></Button>
                <Button value="7" click={this.addDigit} type="number"></Button>
                <Button value="8" click={this.addDigit} type="number"></Button>
                <Button value="9" click={this.addDigit} type="number"></Button>
                <Button value="*" click={this.setOperation} type="operation"></Button>
                <Button value="4" click={this.addDigit} type="number"></Button>
                <Button value="5" click={this.addDigit} type="number"></Button>
                <Button value="6" click={this.addDigit} type="number"></Button>
                <Button value="-" click={this.setOperation} type="operation"></Button>
                <Button value="1" click={this.addDigit} type="number"></Button>
                <Button value="2" click={this.addDigit} type="number"></Button>
                <Button value="3" click={this.addDigit} type="number"></Button>
                <Button value="+" click={this.setOperation} type="operation"></Button>
                <Button value="0" click={this.addDigit} type="number" double></Button>
                <Button value="." click={this.addDigit} type="number"></Button>
                <Button value="=" click={this.setOperation} type="operation"></Button>
                {/* Demais componentes, como display, botões etc. */}
            </div>
        )
    }
}