const initialState = {
    user:{},
}

export const profileReducer = (state=initialState,action) => {
    
    switch (action.type) {
        case 'user_login' : 
       
        return  {
              ...state,  user: action.payload
        }
        case 'user_logout' : 

        return {
            ...state,user:action.payload
        }
       
         default: // need this for default case
             return state 
    }

}

