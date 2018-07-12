import React, { Component } from 'react'

export default function(Com,arr){
    return class  extends Component {
        constructor(props){
            super(props)
            this.state={
                getData:null
            }
      
        }

        ajax(item){
            return new Promise((resolve,reject)=>{
                var xml=new XMLHttpRequest()
                xml.open(item.type,item.url)
                if(item.type=="get"){
                    xml.send()
                }else{
                    xml.setRequestHeader("Content-type","application/x-www-form-urlencoded")
                    xml.send(item.data)
                }
                xml.onreadystatechange=()=>{
                    if(xml.readyState==4){
                        if(xml.status==200){
                            resolve(JSON.parse(xml.responseText))
                        }else{
                            reject("err")
                        }
                    }
                }
            })
        }
        // componentWillMount(){
        //     let newAjax=arr.map((i)=>{
        //         return this.ajax(i)
        //     })
        //     Promise.all(newAjax).then((data)=>{
        //         console.log(data)
        //         this.setState({
        //             getData:data
        //         })
        //     })
        // }
        async componentWillMount(){
            let arrData=[]
            for (let i = 0; i < arr.length; i++) {
                const item = arr[i];
                arrData.push(await this.ajax(item))
            }
            this.setState({
                getData:arrData
            })
        }
        render() {
            let el=this.state.getData?<Com getData={this.state.getData}/>:null
            return el
        }
    }
}




