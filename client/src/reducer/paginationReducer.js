import { PAGE_NUM} from '../action/action-type'
const intialState={
	number:1,
}
const paginationReducer =(state=intialState,action={})=>{
    switch(action.type)
    {
        case PAGE_NUM:
		    return {...state,number:action.number};
	    default:
            return state;
    }
}
    
export default paginationReducer;