// 2.实现一个异步队列Queue，要求按时间依次执行callback
/*
new Queue().task(1000, function () {
    console.log(1);
}).task(2000, function () {
    console.log(2);
}).start()
 */
function Queue() {
    this.callback = []
    this.task = function (timer,fn) {
        this.callback.push({timer,fn})
        return this
    }
    this.start = function () {
        let d = 0
        this.callback.forEach(item=>{
            d += item.timer
            setTimeout(item.fn,d)
        })
    }
}
new Queue().task(1000, function () {
    console.log(1);
}).task(2000, function () {
    console.log(2);
}).start()
