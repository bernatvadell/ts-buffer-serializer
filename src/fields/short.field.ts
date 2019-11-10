import { register } from './register.field';
import { ObjectWithProps } from './interfaces.field';

export default function Short() {
    return (target: ObjectWithProps, property: string | symbol) => {
        register<number>(
            target,
            property,
            (value, stream) => stream.writeShort(value),
            (stream) => stream.readShort(),
        );
    };
}
