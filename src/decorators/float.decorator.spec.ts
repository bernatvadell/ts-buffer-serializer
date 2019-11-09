import { assert } from 'chai';
import { ObjectWithProps } from './interfaces.decorator';
import Float from './float.decorator';

it('Register float decorator', () => {

    class TestClass {
        @Float() value: number = 16535.15;
    }

    const objWithProps = TestClass.prototype as ObjectWithProps;

    assert.isDefined(objWithProps.__serializer__);
    assert.isDefined(objWithProps.__serializer__.value);
});
