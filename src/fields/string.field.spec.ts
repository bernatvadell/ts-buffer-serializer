import { assert } from 'chai';
import String from './string.field';
import { ObjectWithProps } from './interfaces.field';

it('Register string decorator', () => {

    class TestClass {
        @String() say: string = 'Hello World1';
    }

    const objWithProps = TestClass.prototype as ObjectWithProps;

    assert.isDefined(objWithProps.__serializer__);
    assert.isDefined(objWithProps.__serializer__.say);
});
