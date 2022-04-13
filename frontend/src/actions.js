export const LogInAction = () => {
    return ({
        type : "Login"
    })
};


export const LogOutAction = () => {
    return ({
        type : "Logout"
    })
};

export const SetEmailAction = (email) => {
    return ({
        type : "SetEmail",
        payload : email
    })
}

export const RemoveEmailAction = () => {
    return ({
        type : "RemoveEmail"
    })
};

export const SetPrivalage = (privilage) => {
    return ({
        type : "SetPrivilage",
        payload : privilage
    })
};

export const RemovePrivilage = () => {
    return ({
        type : "RemovePrivilage"
    })
};