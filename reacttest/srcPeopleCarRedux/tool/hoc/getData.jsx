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
            item.data=item.data?item.data:{}
            let dataArr=Object.keys(item.data)
            return new Promise((resolve,reject)=>{
                var xml=new XMLHttpRequest()
                if(item.type=="get"){

                    var str=item.url
                    if(dataArr.length>0){
                       str+="?"
                        Object.keys(item.data).forEach((i,index)=>{
                            if(index<dataArr.length-1){
                                str+=`${i}=${item.data[i]}&`
                            }else{
                                str+=`${i}=${item.data[i]}`
                            }   
                        })
                    }
                   
                    xml.open(item.type,str)
                    xml.send()
                }else{
                    let str=""
                    if(dataArr.length>0){
                         Object.keys(item.data).forEach((i,index)=>{
                             if(index<dataArr.length-1){
                                 str+=`${i}=${item.data[i]}&`
                             }else{
                                 str+=`${i}=${item.data[i]}`
                             }   
                         })
                     }
                    console.log(str)
                    xml.open(item.type,item.url)
                    xml.setRequestHeader("Content-type","application/x-www-form-urlencoded")
                    xml.send(str)
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
        componentWillMount(){
            let newAjax=arr.map((i)=>{
                return this.ajax(i)
            })
            Promise.all(newAjax).then((data)=>{
                console.log(data)
                this.setState({
                    getData:data
                })
            })
        }
        // async componentWillMount(){
        //     let arrData=[]
        //     for (let i = 0; i < arr.length; i++) {
        //         const item = arr[i];
        //         arrData.push(await this.ajax(item,arrData))
        //     }
        //     this.setState({
        //         getData:arrData
        //     })
        // }
        render() {
            let el=this.state.getData?<Com {...this.props} getData={this.state.getData}/>:<p>加载中</p>
            return el
        }
    }
}




