import "../css/Calculator.css";
import React from "react";
import Display from "./Display";
import Button from "./Button";

const defaultDisplay = {
    initialValue: "0",
    displayValue: "0",
    clearDisplay: false,
    currentOperation: null,
    values: [0,0],
    currentIndex: 0       
}

export default class Calculator extends React.Component {

    state = {...defaultDisplay};

    clearMemory = () => {
        this.setState({...defaultDisplay});
    }

    setOperation = (operation) => {
        const values = [...this.state.values];
        
        if(operation !== "=") {
            this.setState({currentOperation: operation, clearDisplay: true, currentIndex: 1});
        } else {
            let result = eval(`${this.state.values[0]} ${this.state.currentOperation} ${this.state.values[1]}`);
            result.toString().indexOf(".") > -1 ? result = result.toFixed(2) : result = parseFloat(result);
            values[0] = result;
            this.setState({values:values})
            this.setState({displayValue: result});
        }
    }

    addDigit = (digit) => {
        const values = [...this.state.values]

        if (digit === "." && this.state.displayValue.includes(".")) {
            return;
        } else {
            if (digit === "+/-") {
                const operation = this.state.displayValue * -1;
                values[this.state.currentIndex] = operation
                this.setState({displayValue: operation, values });
                return
            }
        }
        const index = this.state.currentIndex;
        const clearDisplay = this.state.displayValue === "0" || this.state.clearDisplay;
        const currentValue = clearDisplay ? "" : this.state.displayValue;
        const valueToDisplay = currentValue + digit;
        values[index] = valueToDisplay; 
        this.setState({displayValue: valueToDisplay, clearDisplay: false, values});
    }

    render() {
        return (
            <div className="calculator">
                <Display value={this.state.displayValue}></Display>
                <Button value="AC"  click={this.clearMemory} type="function"></Button>
                <Button value="+/-" click={this.addDigit} type="function"></Button>
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