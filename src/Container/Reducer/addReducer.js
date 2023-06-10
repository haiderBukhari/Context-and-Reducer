export const addReducer = (state, action) => {
    const {type, payload} = action;
    switch(type){
        case "Add_to_Cart":
            return {...state, cart:payload.product};
        case "Remove_from_Cart":
            return {...state, cart:payload.product};    
        case "Update_total":
            return {...state, total:payload.length};
    }
}