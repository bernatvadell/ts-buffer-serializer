import { register } from './register.decorator';
import { ObjectWithProps } from './interfaces.decorator';

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
