# TS Binary Serializer

## Overview
Transform objects into binary representations to reduce the size of packet delivery over the network.


## Installing in your project...
npm:
```
npm install ts-binary-serializer
```
yarn:
```
yarn add ts-binary-serializer
```

## BinarySerializer example
### Serializing
```ts
const player = new TestClass();
player.name = 'Harry Potter';
player.level = 200;
player.hp = 1000;
player.attack = 543;
player.decimalValue = 12.12;
player.floatValue = 14.140000343322754;

const buffer = BinarySerializer.serialize(player); // 0c00486172727920506f74746572c8e80300001f023d0ad7a3703d2840713d6241
```

### Deserializing
```ts
const buffer = Buffer.from('000c486172727920506f74746572c8000003e8021f40283d70a3d70a3d41623d71', 'hex');
const player = BinarySerializer.deserialize(TestClass, buffer);

```

### BinaryReader example
```ts
// Buffer to read (message packet)
const buffer = Buffer.from('001342696e617279526561646572576f726b696e67', 'hex');
// Initialize BinaryReader with entry buffer
const reader = new BinaryReader(buffer);
// read buffer content
const result = reader.readString();
```