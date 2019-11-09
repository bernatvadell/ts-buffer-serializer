import { register } from './register.decorator';
import { ObjectWithProps } from './interfaces.decorator';

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
