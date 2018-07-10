import React, { Component } from 'react'

export default class From extends Component {
    constructor(props){
        super(props)
        this.state={
            formData:{
                name:"",
                password:"",
                sex:"女",
                love:["篮球"],
                addr:"南京",
                age:""
            },
            testObj:{
                name:{
                    reg:/^[a-z0-9]{4,9}$/,
                    msg:"请输入正确的用户名",
                    require:true,
                    state:false
                },
                password:{
                    reg:/^[a-z0-9A-Z]{4,9}$/,
                    msg:"请输入正确的密码",
                    require:true,
                    state:false
                },
                age:{
                    reg:/^[0-9]{1,3}$/,
                    msg:"请输入正确的年龄",
                    state:true
                }
            }
        }
    }

    clickHandle(){
        let {name,password,age}=this.state.testObj
        if(!(name.state&&password.state&&age.state)){
            alert("请正确填写表单")
        }else{
            console.log(this.state.formData)
        }
       
    }
    regTestHandle(e){
        let val=this.state.formData[e.target.name]
        let reg=this.state.testObj[e.target.name]
        
        let testFn=()=>{
            if(!reg.reg.test(val)){
                el(reg.msg)
                this.setState(changeState(false))
            }else{
                clearEl()
                this.setState(changeState(true))
            }
        }
        
        let changeState=(state)=>{
            return {
                ...this.state,
                testObj:{
                    ...this.state.testObj,
                    [e.target.name]:{
                        ...this.state.testObj[e.target.name],
                        state:state
                    }
                }
            }
        }

        function clearEl(){
            let $b=e.target.parentNode.getElementsByTagName("b")[0]
            if($b){
                e.target.parentNode.removeChild($b)
            }
        }

        function el(msg){
            let $el=document.createElement("b")
            $el.innerHTML=msg
            e.target.parentNode.appendChild($el)
        }

        function testnull(){
            clearEl()
            if(val==""){
                testRequire()
            }else{
                testFn()
            }
        }

        function testRequire(){
            if(reg.require){
               el("不能为空")
            }
        }
        testnull()
    }
    dataHandle(e){
        console.log(e.target.value)
        let checkboxHandle=function(){
            if(this.state.formData.love.includes(e.target.value)){
                let arr=[...this.state.formData.love]
                let index=arr.indexOf(e.target.value)
                arr.splice(index,1)
                return arr
            }else{
                let arr=[...this.state.formData.love]
                arr.push(e.target.value)
                return arr
            }
        }.bind(this)

        this.setState({
            formData:{
                ...this.state.formData,
                [e.target.name]:e.target.type=="checkbox"?checkboxHandle():e.target.value
            }
        })
    }
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <label htmlFor="">姓名：</label>
                        <input type="text" value={this.state.formData.name} name="name" onBlur={this.regTestHandle.bind(this)} onChange={this.dataHandle.bind(this)}/>
                    </li>
                    <li>
                        <label htmlFor="">密码：</label>
                        <input type="text" value={this.state.formData.password} name="password" onBlur={this.regTestHandle.bind(this)} onChange={this.dataHandle.bind(this)}/>
                    </li>
                    <li>
                        <label htmlFor="">年龄：</label>
                        <input type="text" value={this.state.formData.age} name="age" onBlur={this.regTestHandle.bind(this)} onChange={this.dataHandle.bind(this)}/>
                    </li>
                    <li>
                        <label htmlFor="">性别：</label>
                        男：
                        <input type="radio" name="sex" value="男" checked={this.state.formData.sex=="男"} onChange={this.dataHandle.bind(this)}/>
                        女：
                        <input type="radio" name="sex" value="女" checked={this.state.formData.sex=="女"} onChange={this.dataHandle.bind(this)}/>
                    </li>
                    <li>
                        <label htmlFor="">爱好：</label>
                        篮球：
                        <input type="checkbox" name="love" value="篮球" checked={this.state.formData.love.includes("篮球")} onChange={this.dataHandle.bind(this)}/>
                        足球：
                        <input type="checkbox" name="love" value="足球" checked={this.state.formData.love.includes("足球")} onChange={this.dataHandle.bind(this)}/>
                        乒乓球：
                        <input type="checkbox" name="love" value="乒乓球" checked={this.state.formData.love.includes("乒乓球")}  onChange={this.dataHandle.bind(this)}/>
                    </li>
                    <li>
                        <label htmlFor="">地区：</label>
                       <select name="addr" id="" value={this.state.formData.addr} onChange={this.dataHandle.bind(this)}>
                            <option value="北京" >北京</option>
                            <option value="南京" >南京</option>
                            <option value="上海"  >上海</option>
                       </select>
                    </li>
                    <li>
                        <button onClick={this.clickHandle.bind(this)}>提交</button>
                    </li>
                </ul>
            </div>
        )
    }
}
