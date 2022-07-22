import { HelloWorld } from './HelloWorld';


let helloWorld: HelloWorld;


beforeEach(() => {

    helloWorld = new HelloWorld();

});


test('test greetings', () => {

    expect('HelloWorld').toBe(helloWorld.greetings());

});