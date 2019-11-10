# TS Buffer Serializer

## Overview
Transform objects into binary representations to reduce the size of packet delivery over the network.


## Installing in your project...
npm:
```
npm install ts-buffer-serializer
```
yarn:
```
yarn add ts-buffer-serializer
```

## BinarySerializer example
### Contract (class with fields decorators)
```ts
class PlayerClass {
    @fields.String() name: string;
    @fields.Byte() level: number;
    @fields.Integer() hp: number;
    @fields.Short() attack: number;
    @fields.Double() decimalValue: number;
    @fields.Float() floatValue: number;
    @fields.ArrayOf(fields.Byte()) byteArray: number[];
}
```

### Serializing
```ts
const player = new PlayerClass();
player.name = 'Harry Potter';
player.level = 200;
player.hp = 1000;
player.attack = 543;
player.decimalValue = 12.12;
player.floatValue = 14.140000343322754;
player.byteArray = [60, 50, 30];

const buffer = BinarySerializer.serialize(player); // 000c486172727920506f74746572c8000003e8021f40283d70a3d70a3d41623d7100033c321e
```

### Deserializing
```ts
const buffer = Buffer.from('000c486172727920506f74746572c8000003e8021f40283d70a3d70a3d41623d7100033c321e', 'hex');
const player = BinarySerializer.deserialize(PlayerClass, buffer);
```