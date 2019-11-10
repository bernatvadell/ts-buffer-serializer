import { register } from './register.field';
import { ObjectWithProps } from './interfaces.field';

export default function Float() {
    return (target: ObjectWithProps, property: string | symbol) => {
        register<number>(
            target,
            property,
            (value, stream) => stream.writeFloat(value),
            (stream) => stream.readFloat(),
        );
    };
}
