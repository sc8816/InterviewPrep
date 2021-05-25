/*
**观察者模式
 */

// 观察者
class Observe{
    constructor(name, sub){
        this.name = name
        this.sub = sub
        this.sub.attach(this)
    }

    update(){
        console.log(`${this.name} 观察者更新了state：${this.sub.getState()}`);
    }
}
//被观察者
class Sub{
    constructor(){
        this.state = 0
        this.observers = []
    }
    // 获取状态
    getState (){
        return this.state
    }
    // 设置状态
    setState(state){
        this.state = state
        this.notify()
    }
    // 新增观察者
    attach(observer){
        this.observers.push(observer)
    }
    // 通知每个观察者
    notify(){
        this.observers.forEach(observer =>{
            observer.update()
        })
    }
}

const sub = new Sub()
const observer = new Observe('ss', sub)
sub.setState(2)
