class Div  {
    run(numberA, numberB) {
        if (numberB == 0) {
            throw "Division by zero";
        }else {
            return numberA / numberB;
        }
    }
}

module.exports = Div;
