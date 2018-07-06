import React , { Component } from 'react';

import LifeChild from './lifeChild';


class Life extends Component {
    constructor ( props ) {
        super ( props );
        // fetch('/api/data').then((data)=>{
        //     console.log(data);
        //     return data.json();
        // }).then((data)=>{
        //     console.log(data);
        // });

        this.state={
            name:'lisi',
            age:0
        };
    };
    componentDidMount(){
        // setTimeout(()=>{
        //     this.setState({
        //         name:'lisis'
        //     });
        // },2000);
    }

    cb(data){
        console.log(data);
        console.log(this);
        // setState是异步的
        this.setState({
            age:data
        },()=>{
            console.log(this.state.age);
        });
       
    }

    render () {
        return <div >
            <p>{this.state.name}</p>
            <LifeChild name={this.state.name} cb={this.cb.bind(this)}/>
        </div>;
    };
};
export default Life;