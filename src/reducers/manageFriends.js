export function manageFriends(state, action) {
  switch (action.type) {
    case "ADD_FRIEND":
      console.log(action);
      if (action.friend.name && action.friend.hometown && action.friend.id) {
        const newFriends = state.friends;
        newFriends.push(action.friend);
        return { ...state, friends: newFriends };
      }
    case "REMOVE_FRIEND":
      console.log(action);
      if (action.id) {
        const newFriends = state.friends.filter(friend => {
          return friend.id !== action.id;
        });
        return { ...state, friends: newFriends };
      }
    default:
      return state;
  }
}
