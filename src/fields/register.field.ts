import { ObjectWithProps } from './interfaces.field';
import { BinaryWriter, BinaryReader } from 'stream-binary';

export const propertySerializerName = '__serializer__';

export function register<T>(
    target: ObjectWithProps,
    property: string | symbol,
    serializer: (value: T, stream: BinaryWriter) => void,
    deserializer: (stream: BinaryReader) => T,
) {
    if (!target[propertySerializerName]) {
        Object.defineProperty(target, propertySerializerName, {
            configurable: false,
            enumerable: false,
            writable: false,
            value: {},
        });
    }

    target[propertySerializerName][property.toString()] = {
        serializer,
        deserializer,
    };
}
