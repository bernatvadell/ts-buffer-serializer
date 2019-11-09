import { BinaryWriter, BinaryReader } from 'stream-binary';
import { propertySerializerName } from './decorators/register.decorator';
import { IPropsType } from './decorators/interfaces.decorator';

export class BinarySerializer {

    static serialize<T>(object: T, littleEndian: boolean = false): Buffer {
        const bw = new BinaryWriter(littleEndian);
        const props: IPropsType = Object.getPrototypeOf(object)[propertySerializerName];
        // tslint:disable-next-line: forin
        for (const prop in props) {
            props[prop].serializer(object[prop], bw);
        }
        return bw.getBuffer();
    }

    static deserialize<T>(classType: new (...args: any[]) => T, buffer: Buffer, littleEndian: boolean = false): T {
        const br = new BinaryReader(buffer, littleEndian);
        const props: IPropsType = classType.prototype[propertySerializerName];
        const result = new classType();
        // tslint:disable-next-line: forin
        for (const prop in props) {
            result[prop] = props[prop].deserializer(br);
        }
        return result;
    }

}
