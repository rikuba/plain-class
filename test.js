const assert = require('assert');
const Plain = require('./dist/').default;

class Child extends Plain {
  constructor() {
    super();
    this.childMember = 'this is child member';
  }
  get childGetter() {
    return 'this is child getter';
  }
  childMethod() {
    return 'this is child method';
  }
}

class Grandchild extends Child {
  constructor() {
    super();
    this.grandchildMember = 12345;
  }
  get grandchildGetter() {
    return 'this is grandchild getter';
  }
  grandchildMethod() {
    return 'this is grandchild method';
  }
}

function isPlainObject(object) {
  return object != null && Object.getPrototypeOf(object) === Object.prototype;
}

// Tests for Plain class object

const plain = new Plain();

assert(
  isPlainObject(plain),
  'Plain object must be a plain object'
);

assert.equal(
  [].concat(
    Object.getOwnPropertyNames(plain),
    Object.getOwnPropertySymbols(plain)
  ).length,
  0,
  'Plain object must not have any own properties'
);

// Tests for Child class object

const child = new Child();

assert(
  isPlainObject(child),
  'Child object must be a plain object'
);

assert.deepEqual(
  Object.keys(child),
  ['childMember'],
  'Child object must have only childMember property'
);

assert.equal(
  child.childMember,
  'this is child member',
  'The value of the childMember property of Child object must be the string'
);

// Tests for Grandchild class object

const grandchild = new Grandchild();

assert(
  isPlainObject(grandchild),
  'Grandchild object must be a plain object'
);

assert.deepEqual(
  Object.keys(grandchild).sort(),
  ['childMember', 'grandchildMember'],
  'Grandchild object must have only member properties'
);

assert.equal(
  grandchild.childMember,
  'this is child member',
  'The value of the child member of Grandchild object must be the string'
);

assert.equal(
  grandchild.grandchildMember,
  12345,
  'The value of the grandchild member of Grandchild object must be the number'
);
