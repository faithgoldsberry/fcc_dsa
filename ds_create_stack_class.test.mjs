
import test from 'node:test';
import assert from 'node:assert';
import { Stack } from './ds_create_stack_class.mjs'

test('Your Stack class should have a push method.', (t) => {
  var obj = new Stack
  assert.equal(typeof(obj.push), 'function')
});

test('Your Stack class should have a pop method.', (t) => {
  var obj = new Stack
  assert.equal(typeof(obj.pop), 'function')
});

test('Your Stack class should have a peek method.', (t) => {
  var obj = new Stack
  assert.equal(typeof(obj.peek), 'function')
});

test('Your Stack class should have a isEmpty method.', (t) => {
  var obj = new Stack
  assert.equal(typeof(obj.isEmpty), 'function')
});

test('Your Stack class should have a clear method.', (t) => {
  var obj = new Stack
  assert.equal(typeof(obj.clear), 'function')
});

test('The peek method should return the top element of the stack', (t) => {
  var obj = new Stack
  obj.collection = [1, 2]
  assert.equal(obj.peek(), 2)
});

test('The pop method should remove and return the top element of the stack', (t) => {
  var obj = new Stack
  obj.collection = [1, 2]
  assert.equal(obj.pop(), 2)
  assert.equal(obj.collection.length, 1)
});

test('The isEmpty method should return true if a stack does not contain any elements', (t) => {
  var obj = new Stack
  assert.ok(obj.isEmpty())
  obj.collection = [1, 2]
  assert.ok(!obj.isEmpty())
});

test('The clear method should remove all element from the stack', (t) => {
  var obj = new Stack
  obj.collection = [1, 2]
  obj.clear()
  assert.equal(obj.collection.length, 0)
});
