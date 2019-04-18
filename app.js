const chai       = require('chai');
const assert     = require('chai').assert;
const Add        = require('./Operators/Add');
const Sub        = require('./Operators/Sub');
const Div        = require('./Operators/Div');
const Mul        = require('./Operators/Mul');

describe('App', function(){

   const add  = new Add();
   const sub  = new Sub();
   const div  = new Div();
   const mul  = new Mul();

   it('can do add',function(){
       let result = add.run(1, 2);
        assert.equal(result, 3);
   });
   it('can do div',function(){
      let result = div.run(8, 2);
       assert.equal(result, 3);
   });
   it('can do sub',function(){
      let result = sub.run(8, 2);
       assert.equal(result, 6);
   });
   it('can do mul',function(){
      let result = mul.run(8, 2);
       assert.equal(result, 3);
   });
});
