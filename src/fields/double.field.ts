import { buildField } from './register.field';

const Double = buildField<number>({
    serialize: (value, stream) => stream.writeDouble(value),
    deserialize: (stream) => stream.readDouble(),
});

export default Double;