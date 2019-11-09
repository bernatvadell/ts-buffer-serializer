import { register } from './register.decorator';
import { ObjectWithProps } from './interfaces.decorator';

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
