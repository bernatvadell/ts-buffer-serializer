import { buildField } from './register.field';
import { FieldSerializer, ObjectWithSerializer } from './interfaces.field';


const ArrayOf = (field: any) => {
    const fieldTyped: ObjectWithSerializer = field;

    const serializer: FieldSerializer<any[]> = {
        serialize: (value, stream) => {
            stream.writeShort(value.length);
            for (const item of value) {
                fieldTyped.__serializer__.serialize(item, stream);
            }
        },
        deserialize: (stream) => {
            const arrayLength = stream.readShort();
            const result = new Array(arrayLength);
            for (let i = 0; i < result.length; i++) {
                result[i] = fieldTyped.__serializer__.deserialize(stream);
            }
            return result;
        },
    };

    return buildField<any[]>(serializer)();
};

export default ArrayOf;
