import React, { Component } from 'react';
import axios from '../../tool/axios';
import Nav from './Nav';
import Loading from './loading';
export default class Index extends Component {
    constructor(props){
        super(props);
        this.state={
            data:null
        };
        axios({
            url:'https://www.easy-mock.com/mock/5b3cad50eaf38c457dee3580/example/api/book',
            type:'get'
        }).then((data)=>{
            console.log(data);
            this.setState({
                data
            });
        });
    }

    render() {
        
        return (
            <div>
                {this.state.data?<Nav navData={this.state.data.nav}/>:<Loading />}
            </div>
        );
    }
};



var arr=[1,[2,3],[4,[5,[6,7]]]]

var newarr=[1,2,3,4,5,6,7]