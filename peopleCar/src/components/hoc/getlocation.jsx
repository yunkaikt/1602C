
import React, { Component } from 'react'
import axios from "axios"
import {
    ADDSELECTCITY,
    actions
} from "../../redux/index"
export default (Com)=>{
    return class extends Component {
        constructor(props){
            super(props)
            this.state={
                Com:null,
                getData:null
            }
          
          this.getDataHandle()
        }

        findCityData(location){
            console.log(this.props.getData[0])
            let data=null
            this.props.getData[0].forEach(i => {
                    i.city.forEach((j)=>{
                        if(j.name==location){
                            data=j
                        }
                    })
            });
            return data
        }
        getDataHandle(){
            axios.get("/location/ip?ak=rcoRmA8EjYTdgx2iGGZocGSlDIhN2Yug&coor=bd09ll").then((data)=>{
                sessionStorage.setItem("cityState","1")
                
                this.props.dispatch(actions[ADDSELECTCITY](this.findCityData(data.data.content.address)))

                this.setState({
                    Com,
                    getData:data.data
                })
            })
        }
        render() {
            let {Com}=this.state
            return Com?<Com {...this.props}/>:null
        }
    }
    
}