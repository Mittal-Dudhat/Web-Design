export const userReducer = (initState = {user: {}},action)=>{
   
    if(action.type == 'AddUser'){
        console.log("reducer...........................",action.payload);
        return {user: action.payload};
    }

    return initState;
}