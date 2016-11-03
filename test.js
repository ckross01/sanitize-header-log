const test = require('ava');
const sanitizeHeaderLog = require('./');
const sinon = require('sinon');

test('initial test', () => {
  var spy = sinon.spy();
  sanitizeHeaderLog(spy);
});
