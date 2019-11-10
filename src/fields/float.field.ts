import { buildField } from './register.field';

const Float = buildField<number>({
    serialize: (value, stream) => stream.writeFloat(value),
    deserialize: (stream) => stream.readFloat(),
});

export default Float;
