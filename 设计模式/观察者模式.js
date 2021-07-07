// 被观察者
class Subject {
    constructor(state) {
        this.watcher = []
        this.state = state
    }

    addObserver(observer) {
        this.watcher.push(observer)
    }

    //状态改变
    setState(state) {
        this.state = state
        //状态改变通知观察者进行更新
        this.notify()
    }

    notify() {
        this.watcher.forEach(w => w.fn())
    }
}

//观察者
class Observe {
    constructor(name, fn = () => {
    }) {
        this.name = name
        this.fn = fn
    }
}

//创建一个被观察者
let xiaoming = new Subject('学习')
let master = new Observe('班主任', () => {
    console.log('被班主任逮住了')
})
let xz =  new Observe('校长', () => {
    console.log('被校长逮住了')
})
xiaoming.addObserver(master)
xiaoming.addObserver(xz)
console.log(xiaoming)
xiaoming.setState('就是玩')
