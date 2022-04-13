import {combineReducers, createStore, Redux} from "redux";



const LogInReducer = (state = false , action) => {
    switch(action.type){
        case "Login" :
            return true;
        case "Logout" :
            return false;
        default :
            return state;
    }
}

const EmailReducer = (state = null, action) => {
    switch(action.type){
        case "SetEmail" :
            return action.payload;
        case "RemoveEmail":
            return null;
        default :
            return state;
    }
}

const PrivilageReducer = (state = null, action) => {
    switch(action.type){
        case "SetPrivilage":
            return action.paylod;
        case "RemovePrivilage":
            return null;
        default :
            return state;
    }
}


const rootReducer = combineReducers({LoggedIn : LogInReducer,
     Email : EmailReducer,
      Privilage : PrivilageReducer})

const store = createStore(rootReducer);

export default store;

