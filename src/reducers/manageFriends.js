let action = {
    type: "ADD_FRIEND",
    type:"REMOVE_FRIEND",
    friend: "Chrome Boi"
  }
let state = { friends: [ { name: 'Avi', hometown: 'NYC', id: 100 } ] }


export function manageFriends(state, action){
   switch(action.type){
    case 'ADD_FRIEND':
      return {...state, friends:[...state.friends, action.friend ]}
     case 'REMOVE_FRIEND':
       return {...state, friends: state.friends.filter(friend => friend.id !== action.id)}
     default:
      return state;
   }
}
