var assert = require('assert')

function test() {
  assert.equal(2 + 12, 14);
}

if (module == require.main) require('test').run(test);
