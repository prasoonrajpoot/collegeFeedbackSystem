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

const NameReducer = (state = null , action) => {
    switch(action.type){
        case "SetName" :
            return action.payload;
        case "RemoveName" :
            return null;
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

const SectionReducer = (state = null ,action) => {
    switch(action.type){
        case "SetSection":
            return action.payload
        case "RemoveSection":
            return null;
        default:
            return state;
    }
}

const SemesterReducer = (state = null , action) => {
    switch(action.type){
        case "SetSemester":
            return action.payload;
        case "RemoveSemester":
            return null;
        default:
            return state;
    }
}

const rootReducer = combineReducers({LoggedIn : LogInReducer,
    Name : NameReducer,
     Email : EmailReducer,
      Privilage : PrivilageReducer,
    Semester : SemesterReducer,
    Section : SectionReducer})

const store = createStore(rootReducer);

export default store;

