//创建一个第三方观察者函数
class EventEmitter {
    constructor() {
        this._events = {}
    }
    on(eventType,fn){
        this._events[eventType] = this._events[eventType]||[]
        this._events[eventType].push(fn)
    }
    off(eventType,fn){
        for(let i=0,item = this._events[eventType][i];i<this._events[eventType].length;i++){
            if(item===fn){
                this._events[eventType].splice(i,1)
                break
            }
        }
    }
    emit(eventType,data){
        for(let i=0,fn = this._events[eventType][i];i<this._events[eventType].length;i++){
            fn(data);
        }
    }
}
let newsEvent = new EventEmitter()
newsEvent.on("new message",(title)=>{
    console.log(`新消息:`+title)
})
newsEvent.emit('new message','消息标题')
