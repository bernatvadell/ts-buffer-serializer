import { register } from './register.decorator';
import { ObjectWithProps } from './interfaces.decorator';

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
