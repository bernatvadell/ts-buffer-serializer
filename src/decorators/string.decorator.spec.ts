import { assert } from 'chai';
import String from './string.decorator';
import { ObjectWithProps } from './interfaces.decorator';

it('Register string decorator', () => {

    class TestClass {
        @String() say: string = 'Hello World1';
    }

    const objWithProps = TestClass.prototype as ObjectWithProps;

    assert.isDefined(objWithProps.__serializer__);
    assert.isDefined(objWithProps.__serializer__.say);
});
