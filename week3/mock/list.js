var list = [{
    id: 1,
    type: '高铁',
    data: [{
        id: 101,
        name: 'G151'
    }, {
        id: 102,
        name: 'G12'
    }, {
        id: 103,
        name: 'G13'
    }, {
        id: 104,
        name: 'G141'
    }, {
        id: 105,
        name: 'G16'
    }, {
        id: 106,
        name: 'G171'
    }, {
        id: 7,
        name: 'G181'
    }, {
        id: 8,
        name: 'G19'
    }, {
        id: 9,
        name: 'G18'
    }, {
        id: 10,
        name: 'Ga1'
    }]
}, {
    id: 2,
    type: '动车',
    data: [{
        id: 1,
        name: 'D151'
    }, {
        id: 2,
        name: 'D12'
    }, {
        id: 3,
        name: 'D13'
    }, {
        id: 4,
        name: 'D141'
    }, {
        id: 5,
        name: 'D16'
    }, {
        id: 6,
        name: 'D171'
    }, {
        id: 7,
        name: 'D181'
    }, {
        id: 8,
        name: 'D19'
    }, {
        id: 9,
        name: 'D18'
    }, {
        id: 10,
        name: 'Da1'
    }]
}, {
    id: 3,
    type: '直达',
    data: [{
        id: 1,
        name: 'Z151'
    }, {
        id: 2,
        name: 'Z12'
    }, {
        id: 3,
        name: 'Z13'
    }, {
        id: 4,
        name: 'Z141'
    }, {
        id: 5,
        name: 'Z16'
    }, {
        id: 6,
        name: 'Z171'
    }, {
        id: 7,
        name: 'Z181'
    }, {
        id: 8,
        name: 'Z19'
    }, {
        id: 9,
        name: 'Z18'
    }, {
        id: 10,
        name: 'Za1'
    }]
}, {
    id: 4,
    type: '特快',
    data: [{
        id: 1,
        name: 'T151'
    }, {
        id: 2,
        name: 'T12'
    }, {
        id: 3,
        name: 'T13'
    }, {
        id: 4,
        name: 'T141'
    }, {
        id: 5,
        name: 'T16'
    }, {
        id: 6,
        name: 'T171'
    }, {
        id: 7,
        name: 'T181'
    }, {
        id: 8,
        name: 'T19'
    }, {
        id: 9,
        name: 'T18'
    }, {
        id: 10,
        name: 'Ta1'
    }]
}, {
    id: 5,
    type: '快速',
    data: [{
        id: 1,
        name: 'K151'
    }, {
        id: 2,
        name: 'K12'
    }, {
        id: 3,
        name: 'K13'
    }, {
        id: 4,
        name: 'K141'
    }, {
        id: 5,
        name: 'K16'
    }, {
        id: 6,
        name: 'K171'
    }, {
        id: 7,
        name: 'K181'
    }, {
        id: 8,
        name: 'K19'
    }, {
        id: 9,
        name: 'K18'
    }, {
        id: 10,
        name: 'Ka1'
    }]
}, {
    id: 6,
    type: '其他',
    data: [{
        id: 1,
        name: '其他1'
    }, {
        id: 2,
        name: '其他2'
    }, {
        id: 3,
        name: '其他3'
    }, {
        id: 4,
        name: '其他4'
    }, {
        id: 5,
        name: '其他5'
    }, {
        id: 6,
        name: '其他6'
    }, {
        id: 7,
        name: '其他7'
    }, {
        id: 8,
        name: '其他8'
    }, {
        id: 9,
        name: '其他9'
    }, {
        id: 10,
        name: '其他10'
    }]
}]

// var Mock = require("mockjs")

// var Random = Mock.Random
// let arr = [{ type: "G", name: "高铁" },
//     { type: "D", name: "动车" },
//     { type: "Z", name: "直达" },
//     { type: "T", name: "特快" },
//     { type: "K", name: "快速" },
//     { type: "Q", name: "其他" }
// ]
// var i = 0
// var list = Mock.mock({
//     // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
//     'list|1-4': [{
//         // 属性 id 是一个自增数，起始值为 1，每次增 1
//         'id|+1': i + 1,
//         'type:': () => {
//             let type = arr[i]

//             return type
//         },
//         'data|1-20': [{
//             'id|+1': (i + 1).toString() + 1,
//             'name': () => {
//                 console.log(i)
//                 let data = arr[i].type + Math.floor(Math.random() * 100) + 10
//                 i++
//                 return data
//             }
//         }]
//     }]
// })

// console.log(list)

module.exports = list;