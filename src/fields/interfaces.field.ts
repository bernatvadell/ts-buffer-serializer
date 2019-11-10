import { BinaryReader, BinaryWriter } from 'stream-binary';

export interface IPropsType {
    [prop: string]: {
        serializer: (value: any, stream: BinaryWriter) => void;
        deserializer: (stream: BinaryReader) => any;
    };
}
export interface ObjectWithProps {
    [prop: string]: any;
    __props__?: IPropsType;
}
