import { assert } from 'chai';
import Short from './short.field';
import { ObjectWithProps } from './interfaces.field';

it('Register short decorator', () => {

    class TestClass {
        @Short() value: number = 255;
    }

    const objWithProps = TestClass.prototype as ObjectWithProps;

    assert.isDefined(objWithProps.__serializer__);
    assert.isDefined(objWithProps.__serializer__.value);
});
