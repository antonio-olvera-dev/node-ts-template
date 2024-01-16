import { HelloWorld } from './HelloWorld';
import { expect, test } from 'vitest';


let helloWorld: HelloWorld;

test('test greetings', () => {
    helloWorld = new HelloWorld();
    expect(helloWorld.greetings()).toBe('HelloWorld');
});