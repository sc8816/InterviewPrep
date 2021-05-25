/*
const emitter = new EventEmitter()
emitter.on('log', (param) => {
    console.log(param)
})
emitter.emit('log', 'Event Fire')
 */
//简易版
class EventEmitter {
    constructor() {
        this._events = {}
    }

    on(type, listener) {
        this._events[type] = listener
    }

    emit(type, ...args) {
        if(this._events[type]){
            this._events[type] = this._events[type].call(this, ...args)
        }
    }
}
const emitter = new EventEmitter()
emitter.on('log', function(param) {
    console.log(param)
})
emitter.emit('log', 'Event Fire')
emitter.emit('log', '666')
