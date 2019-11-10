import fields from './fields';
import { BinarySerializer } from './';
import { assert } from 'chai';
import { BinaryWriter, BinaryReader } from 'stream-binary';

class PlayerClass {
    @fields.String() name: string;
    @fields.Byte() level: number;
    @fields.Integer() hp: number;
    @fields.Short() attack: number;
    @fields.Double() decimalValue: number;
    @fields.Float() floatValue: number;
    @fields.ArrayOf(fields.Byte()) byteArray: number[];
}

it('[BE] Test serialize an object', () => {
    const bw = new BinaryWriter();
    const player = new PlayerClass();
    player.name = 'Harry Potter';
    player.level = 200;
    player.hp = 1000;
    player.attack = 543;
    player.decimalValue = 12.12;
    player.floatValue = 14.140000343322754;
    player.byteArray = [60, 50, 30];

    const buffer = BinarySerializer.serialize(player, bw);

    assert.equal(buffer.toString('hex'), '000c486172727920506f74746572c8000003e8021f40283d70a3d70a3d41623d7100033c321e');
});

it('[BE] Test deserialize an object', () => {
    const buffer = Buffer.from('000c486172727920506f74746572c8000003e8021f40283d70a3d70a3d41623d7100033c321e', 'hex');
    const br = new BinaryReader(buffer);
    const player = BinarySerializer.deserialize(PlayerClass, br);

    assert.isDefined(player);
    assert.instanceOf(player, PlayerClass);
    assert.equal(player.name, 'Harry Potter');
    assert.equal(player.level, 200);
    assert.equal(player.hp, 1000);
    assert.equal(player.attack, 543);
    assert.equal(player.floatValue, 14.140000343322754);
    assert.equal(player.decimalValue, 12.12);
    assert.deepEqual(player.byteArray, [60, 50, 30]);
});

it('[LE] Test serialize an object', () => {
    const bw = new BinaryWriter(true);
    const player = new PlayerClass();
    player.name = 'Harry Potter';
    player.level = 200;
    player.hp = 1000;
    player.attack = 543;
    player.decimalValue = 12.12;
    player.floatValue = 14.140000343322754;
    player.byteArray = [60, 50, 30];

    const buffer = BinarySerializer.serialize(player, bw);

    assert.equal(buffer.toString('hex'), '0c00486172727920506f74746572c8e80300001f023d0ad7a3703d2840713d624103003c321e');
});

it('[LE] Test deserialize an object', () => {
    const buffer = Buffer.from('0c00486172727920506f74746572c8e80300001f023d0ad7a3703d2840713d624103003c321e', 'hex');
    const br = new BinaryReader(buffer, true);
    const player = BinarySerializer.deserialize(PlayerClass, br);

    assert.isDefined(player);
    assert.instanceOf(player, PlayerClass);
    assert.equal(player.name, 'Harry Potter');
    assert.equal(player.level, 200);
    assert.equal(player.hp, 1000);
    assert.equal(player.attack, 543);
    assert.equal(player.floatValue, 14.140000343322754);
    assert.equal(player.decimalValue, 12.12);
    assert.deepEqual(player.byteArray, [60, 50, 30]);
});
