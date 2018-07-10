// var arr = [1, [2, 3],
//     [4, [5, [6, 7]]]
// ]

// function handle(data) {
//     var newarr = []

//     function every(item) {
//         if (item.constructor == Array) {
//             item.forEach(i => {
//                 every(i)
//             });

//         } else {
//             newarr.push(item)
//         }
//     }
//     every(data)
//     return newarr
// }

// console.log(handle(arr))

// var newarr = [1, 2, 3, 4, 5, 6, 7] /


// var obj = {
//     name: "zhangname",
//     obj: {
//         age: "123",
//         addr: {
//             area: "beijing"
//         }
//     }
// }

// var newobj = {
//     name: "zhangname",
//     age: "123",
//     area: "bejing"
// }




const options = [{
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [{
            value: 'hangzhou',
            label: 'Hangzhou',
            children: [{
                value: 'xihu',
                label: 'West Lake'
            }]
        }]
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [{
            value: 'nanjing',
            label: 'Nanjing',
            children: [{
                value: 'zhonghuamen',
                label: 'Zhong Hua Men'
            }]
        }]
    }
];


let main = (data) => {
    if (data.constructor == Array) {

        data.forEach((item) => {

            if (item.children && (item.children.constructor == Array)) {
                console.log(item)
                main(item.children)
            } else {
                console.log(item)
            }

        })
    } else {
        console.log(data)

    }
}
main(options)



// 1、cookie使用在客户端和服务端的通讯过程中携带，有时候会浪费掉不必要的带宽，而localstorage是是属于前端存储的一种，不会发生在http的通讯过程中；
//2、cookie存储有一定的限制，每条只能为4k，在谷歌中应该是同域下只能存储50条，而localstorage会相对大一些，可以存储5m；
//3、cookie可以实现客户端和服务端间的会话（比如接口的安全处理等可以采用cookie来验证），而localstorage不可以；