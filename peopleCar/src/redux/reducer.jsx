import {
    ADDSELECTCITY,
    ADDLISTENADDR
} from './type';

let initState={
    selectCity:sessionStorage.getItem("selectCity")?JSON.parse(sessionStorage.getItem("selectCity")):[],
    listenAddr:sessionStorage.getItem("selectCity")?JSON.parse(sessionStorage.getItem("selectCity"))[0]:null
};

export default (state=initState,actions)=>{
    let {type,text}=actions;
    switch(type){
    case ADDSELECTCITY:{
        let arr=[...state.selectCity]
        let findState=arr.some((i)=>{
            if(i.name==text.name){
                return true
            }else{
                return false
            }
        })

        if(findState){
            if(arr.length>1&&sessionStorage.getItem("cityState")!=1){
                arr.splice(arr.indexOf(text),1)
            }
            
        }else{
            if(sessionStorage.getItem("cityState")==1){
               arr.unshift(text)
            }else{
                arr.push(text)
            }
            
        }
        sessionStorage.setItem("cityState","0")
        sessionStorage.setItem("selectCity",JSON.stringify(arr))
        return {...state,...{selectCity:arr}};
    };

    case ADDLISTENADDR:{
        return {...state,...{listenAddr:text}};
    };
    
    default:{
        return state;
    };
    };
};
