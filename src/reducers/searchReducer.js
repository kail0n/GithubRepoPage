const initState = { username: ""}

const searchReducer = (state=initState, action) => {
    switch(action.type){
        case "ENTER_USERNAME":
            const usernameToUpdate =  action.payload;
            return{...state}
    }
}