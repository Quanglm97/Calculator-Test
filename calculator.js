class Calculator {
    contructor() {
        this.operators = {};
    }

    register(name, operator) {
        this.opetators[name] = operator;
        return this;
    }

    calculate(operatorName, numberA, numberB) {
        const operator = this.operators[operatorName];
        if (!operator) {
            throw new Error (`Operator [${operatorName}] is not supported!`);
        }
        return operator.run(numberA, numberB);
    }
}

module.exports = Calculator;