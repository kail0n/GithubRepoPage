const initState = { username: ""}

const searchReducer = (state=initState, action) =>{
    switch(action.type){
        case "ADD_A_USERNAME":
            const usernameToUpdate =  action.payload;
            return{username: usernameToUpdate}
        default:
            return state;
    }
}

export default searchReducer;