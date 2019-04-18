const chai           = require('chai');
const assert         = require('mocha').assert;
const Addition       = require('./Operators/Addition');
const Subtraction    = require('./Operators/Subtraction');
const Division       = require('./Operators/Division');
const Multiplication = require('./Operators/Multiplication');

describe('App', function () {

   const addition       = new Addition();
   const subtraction    = new Subtraction();
   const division       = new Division();
   const multiplication = new Multiplication();

   it('test addition', function () {
      chai.assert.equal(addition.run(1, 2), 3);
   });
   it('test division', function () {
      chai.assert.equal(division.run(8,2), 3);
   });
   it('test subtraction', function () {
      chai.assert.equal(subtraction.run(1, 2), 3);
   });
   it('test multipcation', function () {
      chai.assert.equal(multiplication.run(4, 2), 8);
   });
});
