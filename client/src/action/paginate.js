import { PAGE_NUM } from './action-type'
//add cart action
export const pageGet= (num)=>{
    return{
        type: PAGE_NUM,
        number:num,
        
    }
}