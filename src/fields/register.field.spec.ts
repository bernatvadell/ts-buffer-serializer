import { register } from './register.field';
import { assert } from 'chai';
import { ObjectWithProps } from './interfaces.field';

it('Register any decorator', () => {
    const obj = {
        say: 'Hello World!',
    };

    const serialize = (value, stream) => stream.writeString(value);
    const deserialize = (stream) => stream.readString();

    register<string>(
        obj,
        'say',
        serialize,
        deserialize,
    );

    const objWithProps = (obj as ObjectWithProps);
    assert.isDefined(objWithProps.__serializer__);
    assert.isDefined(objWithProps.__serializer__.say);
    assert.equal(objWithProps.__serializer__.say.serializer, serialize);
    assert.equal(objWithProps.__serializer__.say.deserializer, deserialize);
});
