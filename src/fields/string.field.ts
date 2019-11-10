import { buildField } from './register.field';

const FieldString = buildField<string>({
    serialize: (value, stream) => stream.writeString(value),
    deserialize: (stream) => stream.readString(),
});

export default FieldString;
