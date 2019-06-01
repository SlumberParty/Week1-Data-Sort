import sortList from '../src/sort-list.js';
const test = QUnit.test;

QUnit.module('Sort Things');

const felix = {
    name: 'Felix',
    type: 'Tuxedo'
};
const garfield = {
    name: 'Garfield',
    type: 'Orange Tabby'
};
const duchess = {
    name: 'Duchess',
    type: 'Angora'
};
const cats = [felix, garfield, duchess];

test('sorts on name', assert => {
    const sortOptions = {
        property: 'name',
        direction: 1
    };

    const sorted = sortList(cats, sortOptions);

    assert.deepEqual(sorted, [duchess, felix, garfield]);
});

test('sorts on type', assert => {
    const sortOptions = {
        property: 'type',
        direction: 1
    };

    const sorted = sortList(cats, sortOptions);

    assert.deepEqual(sorted, [duchess, garfield, felix]);
});

test('sorts on name descending', assert => {
    const sortOptions = {
        property: 'name',
        direction: -1
    };

    const sorted = sortList(cats, sortOptions);

    assert.deepEqual(sorted, [garfield, felix, duchess]);
});

test('sort does not change array', assert => {
    const sortOptions = {
        property: 'name',
        direction: 1
    };
    
    const sorted = sortList(cats, sortOptions);

    assert.notEqual(sorted, cats);
});