import { buildField } from './register.field';

const Byte = buildField<number>({
    serialize: (value, stream) => stream.writeByte(value),
    deserialize: (stream) => stream.readByte(),
});

export default Byte;
