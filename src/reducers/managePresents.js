let numberOfPresents = 0


export function managePresents(state = { numberOfPresents: 0}, action){
    switch(action.type){
        case 'INCREASE':
            state = {...state, numberOfPresents: numberOfPresents+1}
        break;
           
        case (!'INCREASE'):
            state = state
        break;
        
    
    }
    
    return state
   
    //  return {...state, numberOfPresents: numberOfPresents+1}
}
