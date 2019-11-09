import { register } from './register.decorator';
import { ObjectWithProps } from './interfaces.decorator';

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
