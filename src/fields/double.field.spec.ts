import { assert } from 'chai';
import { ObjectWithProps } from './interfaces.field';
import Double from './double.field';

it('Register double decorator', () => {

    class TestClass {
        @Double() value: number = 16535.15;
    }

    const objWithProps = TestClass.prototype as ObjectWithProps;

    assert.isDefined(objWithProps.__serializer__);
    assert.isDefined(objWithProps.__serializer__.value);
});
