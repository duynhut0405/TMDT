import { SORT_TYPE } from './action-type'
//add cart action
export const sortChoose= (name)=>{
    return{
        type: SORT_TYPE,
        route:name,
        
    }
}