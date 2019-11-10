import { assert } from 'chai';
import { ObjectWithProps } from './interfaces.field';
import Integer from './integer.field';

it('Register int decorator', () => {

    class TestClass {
        @Integer() value: number = 16535;
    }

    const objWithProps = TestClass.prototype as ObjectWithProps;

    assert.isDefined(objWithProps.__serializer__);
    assert.isDefined(objWithProps.__serializer__.value);
});
