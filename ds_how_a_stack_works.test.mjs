import test from 'node:test';
import assert from 'node:assert';
import { homeworkStack, original } from './ds_how_a_stack_works.mjs'

// ----------------Free Code Camp---------------------

test('homeworkStack should only contain 4 elements.', (t) => {
    assert.equal(homeworkStack.length, 4);
});

test('The last element in homeworkStack should be "CS50".', (t) => {
    assert.equal(homeworkStack.pop(), "CS50");
});

test('homeworkStack should not contain "PSY44".', (t) => {
    assert.ok(!homeworkStack.includes("PSY44"));
});

test('The initial declaration of the homeworkStack should not be changed.', (t) => {
    assert.ok(homeworkStack === original);
});
