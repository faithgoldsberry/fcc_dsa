import test from 'node:test';
import assert from 'node:assert';
import { buffer, i32View } from './ds_typed_arrays.mjs';

test('Your buffer should be 64 bytes large.', (t) => {
    assert.equal(buffer.byteLength, 64);
  });

test('Your i32View view of your buffer should be 64 bytes large.', (t) => {
  assert.equal(i32View.byteLength, 64);
});

test('Your i32View view of your buffer should be 16 elements long.', (t) => {
  assert.equal(i32View.length, 16);
});