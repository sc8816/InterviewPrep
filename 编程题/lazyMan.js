/*
LazyMan('Tony');
// Hi I am Tony

LazyMan('Tony').sleep(10).eat('lunch');
// Hi I am Tony
// 等待了10秒...
// I am eating lunch

LazyMan('Tony').eat('lunch').sleep(10).eat('dinner');
// Hi I am Tony
// I am eating lunch
// 等待了10秒...
// I am eating diner

LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(10).eat('junk food');
// Hi I am Tony
// 等待了5秒...
// I am eating lunch
// I am eating dinner
// 等待了10秒...
// I am eating junk food
 */

class GenerateLazyMan {
    constructor(name) {
        this.task = []
        console.log(`Hi I am ${name}`)
        setTimeout(() => {
            this.excuse()
        },0)
    }

    eat(what) {
        let func = () => {
            console.log(`I am eating ${what}`)
            this.excuse()
        }
        this.task.push(func)
        return this
    }

    sleep(time) {
        let func = () => {
            setTimeout(()=>{
                console.log(`等待了${time}秒`)
                this.excuse()
            }, time*1000)
        }
        this.task.push(func)
        return this
    }

    sleepFirst(time){
        let func = () => {
            setTimeout(()=>{
                console.log(`等待了${time}秒`)
                this.excuse()
            }, time*1000)
        }
        this.task.unshift(func)
        return this
    }

    excuse() {
        let task = this.task.shift()
        console.log(task)
        task && task()
    }
}

function LazyMan(name) {
    return new GenerateLazyMan(name)
}
LazyMan('Tony').sleep(10).eat('lunch');
