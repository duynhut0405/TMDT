import { USER_LOGIN, USER_LOGOUT} from '../action/action-type'
const intialState={
	username:'',
}
const loginReducer =(state=intialState,action={})=>{
	switch(action.type){
	case USER_LOGIN:
		console.log(action.type)
	return Object.assign({},state, {username:action.username})//(obj)thứ muốn change)//new state
	//hoặc return{...state, {searchField:action.payload}}//object spread operator
	case USER_LOGOUT:
		return {...state,username:'',id:''}
	default:
		return state;
	}
}
export default loginReducer;