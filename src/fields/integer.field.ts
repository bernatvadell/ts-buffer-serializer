import { buildField } from './register.field';

const Integer = buildField<number>({
    serialize: (value, stream) => stream.writeInt(value),
    deserialize: (stream) => stream.readInt(),
});

export default Integer;
