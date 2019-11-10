import { buildField } from './register.field';

const Short = buildField<number>({
    serialize: (value, stream) => stream.writeShort(value),
    deserialize: (stream) => stream.readShort(),
});

export default Short;
