export const FriendList = ({ friends }) => {
    
    return (<ul className ="friend-list">
        {friends.map(friend => { return <FriendListItem  friend={friend} />})} 
    </ul>)
}
const FriendListItem = ({ friend }) => {
    console.log(friend);
    return (<li className="item">
        <span className="status"> {friend.isOnline }</span>
  <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
        <p className="name">{ friend.name }</p>
</li>)
}