

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

export const SetNameAction = (name) => {
    return ({
        type : "SetName",
        payload : name
    })
}


export const RemoveNameAction = () => {
    return ({
        type : "RemoveName"
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


export const SetSemesterAction = (semester) => {
    return ({
        type : "SetSemester",
        payload : semester
    })
}

export const SetSectionAction = (section) => {
    return ({
        type : "SetSection",
        payload: section
    })
}
