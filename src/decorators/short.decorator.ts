import { register } from './register.decorator';
import { ObjectWithProps } from './interfaces.decorator';

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
