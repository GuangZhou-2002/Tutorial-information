/* 实现PromiseA+规范：自己手写Promise */
/* 1、Promise应该是一个类 */
/* 2、Promise接收一个函数作为参数,这个函数应该是立即执行的。 */
/* 3、executor执行器函数应该拥有两个参数，而且这两个参数都应该是函数(成功|失败)。*/
/* 4、Promise有状态：三个状态 */

const PENDING = "PENDING";
const REJECTED = "REJECTED";
const RESOLVED = "RESOLVED";


class Promise {
    constructor(executor) {
        this.status = PENDING;
        this.value = undefined; /* 处理成功的结果 */
        this.reason = undefined; /* 处理失败的结果 */

        this.resolveCallBackQueue = [];
        this.rejectCallBackQueue = [];

        let resolve = (val) => {
            if (this.status === PENDING) {
                this.status = RESOLVED;
                this.value = val;

                this.resolveCallBackQueue.forEach(fn => fn());
            }
        }

        let reject = (val) => {
            if (this.status == PENDING) {
                this.status = REJECTED;
                this.reason = val;

                this.rejectCallBackQueue.forEach(fn => fn());
            }

        }
        executor(resolve, reject);
    }
    then(onFulfilled, onRejected) {
        let promise = new Promise((resolve, reject) => {
            if (this.status == RESOLVED) {
                onFulfilled(this.value);
            }

            if (this.status == REJECTED) {
                onRejected(this.reason);
            }

            /* 发布\订阅者模式 */
            if (this.status == PENDING) {
                this.resolveCallBackQueue.push(() => {
                    onFulfilled(this.value);
                });
                this.rejectCallBackQueue.push(() => {
                    onRejected(this.reason);
                });
            }
        })
        return promise;
    }

}