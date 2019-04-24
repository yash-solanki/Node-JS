const assert = require('chai').assert;

// const sayHello = require('../app').sayHello;
// const addNumbers = require('../app').addNumbers;

const app = require('../app');

sayHelloResult = app.sayHello();
addNumbersResult = app.addNumbers(10,20);

 describe('App()=>', () => {

    describe('sayHello()=>' , () => {
        it('sayHello should return hello', () => {

            // let result = app.sayHello();
             assert.equal( sayHelloResult , 'hello');
         });
    
         it('sayHello should return type string', () => {
            // let result = app.sayHello();
            assert.typeOf(sayHelloResult, 'string');
         });
    })

    describe('addNumbers()=>', () => {
        it('addNumbers should return 30', () => {
            //  let result = app.addNumbers(10,20);
             assert.equal( addNumbersResult, 30 );
    
        });
    });
 });