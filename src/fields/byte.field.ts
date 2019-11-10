import { register } from './register.field';
import { ObjectWithProps } from './interfaces.field';

export default function Byte() {
    return (target: ObjectWithProps, property: string | symbol) => {
        register<number>(
            target,
            property,
            (value, stream) => stream.writeByte(value),
            (stream) => stream.readByte(),
        );
    };
}
