import React, { Component } from 'react'
import style from "../../css/chooseCard.css"
import {
    ADDSELECTCITY,
    actions
} from "../../redux/index"
export default class ChooseCity extends Component {
    addCity(item){
        this.props.dispatch(actions[ADDSELECTCITY](item))
    }  
    render() {
        let el=this.props.selectCity.map((i,index)=>{
            return <li key={index} onClick={()=>this.addCity(i)}>{i.name}</li>
        })
        return (
            <div className={style.chooseCity}>
                <h3>已选择城市</h3>
                <ul>
                    {el}
                </ul>
            </div>
        )
    }
}
