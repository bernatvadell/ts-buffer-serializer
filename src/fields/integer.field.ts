import { register } from './register.field';
import { ObjectWithProps } from './interfaces.field';

export default function Integer() {
    return (target: ObjectWithProps, property: string | symbol) => {
        register<number>(
            target,
            property,
            (value, stream) => stream.writeInt(value),
            (stream) => stream.readInt(),
        );
    };
}
