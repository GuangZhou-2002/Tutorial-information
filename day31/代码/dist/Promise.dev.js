"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* 实现PromiseA+规范：自己手写Promise */

/* 1、Promise应该是一个类 */

/* 2、Promise接收一个函数作为参数,这个函数应该是立即执行的。 */

/* 3、executor执行器函数应该拥有两个参数，而且这两个参数都应该是函数(成功|失败)。*/

/* 4、Promise有状态：三个状态 */
var PENDING = "PENDING";
var REJECTED = "REJECTED";
var RESOLVED = "RESOLVED";

var Promise =
/*#__PURE__*/
function () {
  function Promise(executor) {
    var _this = this;

    _classCallCheck(this, Promise);

    this.status = PENDING;
    this.value = undefined;
    /* 处理成功的结果 */

    this.reason = undefined;
    /* 处理失败的结果 */

    this.resolveCallBackQueue = [];
    this.rejectCallBackQueue = [];

    var resolve = function resolve(val) {
      if (_this.status === PENDING) {
        _this.status = RESOLVED;
        _this.value = val;

        _this.resolveCallBackQueue.forEach(function (fn) {
          return fn();
        });
      }
    };

    var reject = function reject(val) {
      if (_this.status == PENDING) {
        _this.status = REJECTED;
        _this.reason = val;

        _this.rejectCallBackQueue.forEach(function (fn) {
          return fn();
        });
      }
    };

    executor(resolve, reject);
  }

  _createClass(Promise, [{
    key: "then",
    value: function then(onFulfilled, onRejected) {
      var _this2 = this;

      var promise = new Promise(function (resolve, reject) {
        if (_this2.status == RESOLVED) {
          onFulfilled(_this2.value);
        }

        if (_this2.status == REJECTED) {
          onRejected(_this2.reason);
        }
        /* 发布\订阅者模式 */


        if (_this2.status == PENDING) {
          _this2.resolveCallBackQueue.push(function () {
            onFulfilled(_this2.value);
          });

          _this2.rejectCallBackQueue.push(function () {
            onRejected(_this2.reason);
          });
        }
      });
      return promise;
    }
  }]);

  return Promise;
}();