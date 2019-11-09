import { assert } from 'chai';
import { ObjectWithProps } from './interfaces.decorator';
import Integer from './integer.decorator';

it('Register int decorator', () => {

    class TestClass {
        @Integer() value: number = 16535;
    }

    const objWithProps = TestClass.prototype as ObjectWithProps;

    assert.isDefined(objWithProps.__serializer__);
    assert.isDefined(objWithProps.__serializer__.value);
});
