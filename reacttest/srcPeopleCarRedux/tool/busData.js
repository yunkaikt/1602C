class Bus {
    constructor(initstate) {
        // Object.assign(this, initstate)
        this.state = initstate
        this.cbArr = []
        this.listen()
    }

    listen() {
        var that = this
        Object.keys(this.state).forEach((i) => {

            Object.defineProperty(this.state, i, {
                get() {
                    return this["_" + i]
                },
                set(newVal) {

                    this["_" + i] = newVal
                    that.cbRun()
                    console.log(newVal)
                }
            })
        })
    }
    cbRun() {
        this.cbArr.forEach((cb) => {
            cb(this.state)
        })
    }

    subscript(cb) {
        this.cbArr.push(cb)
    }
}


export default Bus