import React, { Component } from 'react';
import PropTypes from 'prop-types';
// 导致react的render函数执行：
// 1、props的改变；
// 2、state的改变



class LifeChild extends Component {
    static defaultProps={
        name:'wangwu'
    }
    static propTypes={
        name:PropTypes.string
    }
    constructor(props){
        super(props);
        this.state={
            name:this.props.name||'zhangsan',
            age:23
        };
        console.log('constructor');
        // state初始数据的定义；
        // 将不可改变的props值赋给state，
        // 绑定函数的this指向，
        // 数据的处理，
        // 其他的非dom操作的都可在此执行
        // 发起数据的请求（有问题）


        this.props.cb(this.state.age);

    }
    componentWillMount(){
        // 初次挂载，在render之前，唯一一次还可以改变数据的地方
        console.log('componentWillMount');
    }
    
   
    render() {
        // 纯函数：不做数据的产生，不做数据的存储，只做数据的处理，和逻辑的处理
        // 接受相同格式不同的数据，产出相同（一定）格式不同的结果，
        // 一定记住只坐渲染（渲染时可以进行判断和循环）,不做state的更改，不做新数据的产生，如date
        
        console.log('render');
        return (
            <div>
                {this.state.name}
            </div>
        );
    }
    componentDidMount(){
        // dom的操作
        // 比如插件的实例化（swiper）
        // 计时器的开启
        // 事件的监听
        console.log('componentDidMount');

        
    }

    componentWillReceiveProps(newprops){
        // 如果props赋给state做渲染，
        // 必须在这里监听props的改变，把更新后的props赋给state，然后才能渲染出新结构；
        this.setState({
            name:newprops.name
        });
    }
    shouldComponentUpdate(newProps,newState){
        // 做数据对比的，决定是否执行render
        // 渲染劫持，
        // 性能提升
        return this.state.name!==newState.name;
    }
    componentWillUpdate(){

    }
    componentDidUpdate(){
        // dom的操作
        // 比如插件的实例化（swiper）
        // 计时器的开启
        // 事件的监听
        setTimeout(()=>{
            this.setState({
                name:'lisis3'
            });
        },3000);
    }
};

// Life.defaultProps={
//     name:'wangwu'
// };

export default LifeChild;
