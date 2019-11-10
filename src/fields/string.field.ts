import { register } from './register.field';
import { ObjectWithProps } from './interfaces.field';

export default function String() {
    return (target: ObjectWithProps, property: string | symbol) => {
        register<string>(
            target,
            property,
            (value, stream) => stream.writeString(value),
            (stream) => stream.readString(),
        );
    };
}
