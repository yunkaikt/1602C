import {
    SETDATA,
    CHECKEDLIST
} from './type';

let initState={
    data:null,
    checkedList:[],
    renderList:[]
};

export default (state=initState,actions)=>{
    let {type,text}=actions;
    console.log(actions)
    switch(type){
    case SETDATA:{
        
        return {...state,...{data:text}};
    };
    case CHECKEDLIST:{
           
            let arr=[]
            state.data.forEach(i => {
                if(text.includes(i.type)){
                  arr.push(...i.data)
                }
            });
        return {...state,...{checkedList:text},...{renderList:arr}};
    };
    default:{
        return state;
    };
    };
};
