
export function manageFriends(state = {friends}, action){
   switch(action.type){
       case 'ADD_FRIEND':
           return {...state,
            friends: [...state.friends, action.friend]
            } 
            
     
       case 'REMOVE_FRIEND':
            return {...state, friends: state.friends.filter(friend => friend.id!==action.id)}
      
       default: 
            return state
       
   } 
   
}


// export function manageFriends(state = {friends}, action){
//     switch(action.type){
//         case 'ADD_FRIEND':
//             return {...state,
//              friends: [...state.friends, action.friend]
//thisline when I had -> friends: [...state.friends, action.friend]-> threw error
//              } 
             
      
//         case 'REMOVE_FRIEND':
//              return {...state, friends: state.friends.filter(friend => friend.id!==action.id)}
       
//         default: 
//              return state
        
//     } 
    
//  }
//{...state.friends, state.friends.filter(friend => friend.id!== action.friend.id)
//threw errors ->state.friends -> dont have. action.id -> correct ;action.friend.id -> not correct}
 