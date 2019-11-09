import { assert } from 'chai';
import Byte from './byte.decorator';
import { ObjectWithProps } from './interfaces.decorator';

it('Register byte decorator', () => {

    class TestClass {
        @Byte() value: number = 16535;
    }

    const objWithProps = TestClass.prototype as ObjectWithProps;

    assert.isDefined(objWithProps.__serializer__);
    assert.isDefined(objWithProps.__serializer__.value);
});
