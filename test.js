//a1 = [121, 144, 19, 161, 19, 144, 19, 11];
//a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
//Test.assertEquals(comp(a1, a2), true);

const expect = require('chai').expect;
const compModule = require('./task.js');

describe('userService test', function () {
  /*it('should get all groups', function (done) {
    var a1 = [121, 144, 19, 161, 19, 144, 19, 11];
    var a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
    var result = compModule.comp(a1, a2);
    debugger;
    expect(result).to.equal(true);

    done();
  });
  it('simpleTest', function (done) {
    var a1 = [121, 144];
    var a2 = [121*121, 144*144];
    var result = compModule.comp(a1, a2);
    debugger;
    expect(result).to.equal(true);

    done();
  }); */
  it('simpleTestFindsElement', function (done) {
    var arr = [2,4,6,8];
    var el = 4;
    expect(compModule.findElement(arr, el)).to.equal(true);

    done();
  });
  it('simpleTestNoFindsElement', function (done) {
    var arr = [2,4,6,8];
    var el = 1;
    expect(compModule.findElement(arr, el)).to.equal(false);

    done();
  });
  it('compere array', function (done) {
    var arr1 = [2,4,6,8];
    var arr2 = [2*2, 4*4, 6*6, 8*8];
    expect(compModule.compere(arr1, arr2)).to.equal(true);

    done();
  });
  it('not compere array', function (done) {
    var arr1 = [5,4,6,8];
    var arr2 = [2*2, 4*4, 6*6, 8*8];
    expect(compModule.compere(arr1, arr2)).to.equal(false);

    done();
  });

  it('not compere array', function (done) {
    var arr1 = null;
    var arr2 = 4;
    expect(compModule.compere(arr1, arr2)).to.equal(false);

    done();
  });
  it('not compere array', function (done) {
    var arr1 = [2,4,6,8];
    var arr2 = [2*2, 4*4, 6*6, 8*8];
    expect(compModule.compereSums(arr1, arr2)).to.equal(true);

    done();
  });


});
