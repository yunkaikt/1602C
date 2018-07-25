import React, { Component } from 'react'
import getApi from "../hoc/getApi"
import style from "../../css/CPRender.css"
import {
    ADDSELECTCITY,
    actions
} from "../../redux/index"
class ChooseProvinceRender extends Component {
    constructor(props){
        super(props)
        console.log(props.getData)
        this.state={
            data:props.getData[0]
        }
    }
    addCity(item){
        this.props.dispatch(actions[ADDSELECTCITY](item))
    }   
    render() {
        let cityEl=(item)=>{
            let everyEl=item.city.map((i,index)=>{
                return <p key={index} onClick={()=>this.addCity(i)}>{i.name}</p>
            })
            return <section>
                    {everyEl}
            </section>
        }
        let el=this.state.data.map((i,index)=>{
            return <li key={index}>
                    <h3>{i.letter}</h3>
                    {cityEl(i)}
            </li>
        })

       
        return (
            <ul className={style.chooseRender}>
                {el}
            </ul>
        )
    }
}



export default ChooseProvinceRender
