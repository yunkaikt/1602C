var bus = {

    arr: {},
    $on(event, cb) {
        if (!this.arr[event]) {
            this.arr[event] = [cb]
        } else {
            this.arr[event].push(cb)
        }

    },
    $emit(event, ...data) {

        // let events = Array.prototype.slice.call(arguments, 0, 1)
        // let datas = Array.prototype.slice.call(arguments, 1)
        // this.arr[events].forEach((cb) => {
        //     cb(...datas)
        // })

        if (!this.arr[event]) {
            return
        }
        this.arr[event].forEach((cb) => {
            cb(...data)
        })
    },
    $destroy(event) {
        delete this.arr[event]
    }
}

export default bus

// 订阅者发布者（观察者）


// bus.$on("up", (data1, data2, dada3) => {
//     console.log(data1, data2, dada3)
// })
// bus.$on("up", (data1, data2, dada3) => {
//     console.log(data1, data2, dada3)
// })

// bus.$on("down", (data) => {
//     console.log(data)
// })


// bus.$destroy("up")
// bus.$emit("up", 1234, "bawei", "heihei")
// bus.$emit("down", 456)