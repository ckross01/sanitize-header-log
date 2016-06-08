const test = require('ava');
const sanitizeHeaderLog = require('./');
const sinon = require('sinon');

test('initial test', t => {
  var spy = sinon.spy();
  var req = {

  }
  sanitizeHeaderLog(spy);
});
