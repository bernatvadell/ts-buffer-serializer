
import { assert } from 'chai';
import { ObjectWithProps } from './interfaces.field';
import ArrayOf from './array.field';
import Byte from './byte.field';

it('Register byte decorator', () => {

    class TestClass {
        @ArrayOf(Byte()) value: number[] = [16535];
    }

    const objWithProps = TestClass.prototype as ObjectWithProps;

    assert.isDefined(objWithProps.__serializer__);
    assert.isDefined(objWithProps.__serializer__.value);
});
