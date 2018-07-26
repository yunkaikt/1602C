import {
    ADDSELECTCITY,
    ADDLISTENADDR
} from './type';

export default {
    [ADDSELECTCITY](text){
        return {
            type:ADDSELECTCITY,
            text:text
        };
    },
    [ADDLISTENADDR](text){
        return {
            type:ADDLISTENADDR,
            text:text
        };
    }
};
