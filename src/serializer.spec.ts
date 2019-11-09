import decorators from './decorators';
import { BinarySerializer } from './';
import { assert } from 'chai';

class TestClass {
    @decorators.String() name: string;
    @decorators.Byte() level: number;
    @decorators.Integer() hp: number;
    @decorators.Short() attack: number;
    @decorators.Double() decimalValue: number;
    @decorators.Float() floatValue: number;
}

it('[BE] Test serialize an object', () => {
    const player = new TestClass();
    player.name = 'Harry Potter';
    player.level = 200;
    player.hp = 1000;
    player.attack = 543;
    player.decimalValue = 12.12;
    player.floatValue = 14.140000343322754;

    const buffer = BinarySerializer.serialize(player);

    assert.equal(buffer.toString('hex'), '000c486172727920506f74746572c8000003e8021f40283d70a3d70a3d41623d71');
});

it('[BE] Test deserialize an object', () => {
    const buffer = Buffer.from('000c486172727920506f74746572c8000003e8021f40283d70a3d70a3d41623d71', 'hex');
    const player = BinarySerializer.deserialize(TestClass, buffer);

    assert.isDefined(player);
    assert.instanceOf(player, TestClass);
    assert.equal(player.name, 'Harry Potter');
    assert.equal(player.level, 200);
    assert.equal(player.hp, 1000);
    assert.equal(player.attack, 543);
    assert.equal(player.floatValue, 14.140000343322754);
    assert.equal(player.decimalValue, 12.12);
});

it('[LE] Test serialize an object', () => {
    const player = new TestClass();
    player.name = 'Harry Potter';
    player.level = 200;
    player.hp = 1000;
    player.attack = 543;
    player.decimalValue = 12.12;
    player.floatValue = 14.140000343322754;

    const buffer = BinarySerializer.serialize(player, true);

    assert.equal(buffer.toString('hex'), '0c00486172727920506f74746572c8e80300001f023d0ad7a3703d2840713d6241');
});

it('[LE] Test deserialize an object', () => {
    const buffer = Buffer.from('0c00486172727920506f74746572c8e80300001f023d0ad7a3703d2840713d6241', 'hex');
    const player = BinarySerializer.deserialize(TestClass, buffer, true);

    assert.isDefined(player);
    assert.instanceOf(player, TestClass);
    assert.equal(player.name, 'Harry Potter');
    assert.equal(player.level, 200);
    assert.equal(player.hp, 1000);
    assert.equal(player.attack, 543);
    assert.equal(player.floatValue, 14.140000343322754);
    assert.equal(player.decimalValue, 12.12);
});
