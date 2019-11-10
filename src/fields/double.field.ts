import { register } from './register.field';
import { ObjectWithProps } from './interfaces.field';

export default function Double() {
    return (target: ObjectWithProps, property: string | symbol) => {
        register<number>(
            target,
            property,
            (value, stream) => stream.writeDouble(value),
            (stream) => stream.readDouble(),
        );
    };
}
