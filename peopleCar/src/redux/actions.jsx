import {
    ADDSELECTCITY
} from './type';

export default {
    [ADDSELECTCITY](text){
        return {
            type:ADDSELECTCITY,
            text:text
        };
    }
};
