import PropTypes from 'prop-types';
import { Wrapper, Item } from './Friends.styled';
export const FriendList = ({ friends }) => {
  return (
    <Wrapper>
      <ul className="friend-list">
        {friends.map(friend => {
          return <FriendListItem key={friend.id} friend={friend} />;
        })}
      </ul>
    </Wrapper>
  );
};
const FriendListItem = ({ friend }) => {
  return (
    <li className="item">
      <Item>
        <span className="status"> {friend.isOnline}</span>
        <img
          className="avatar"
          src={friend.avatar}
          alt="User avatar"
          width="48"
        />
        <p className="name">{friend.name}</p>
      </Item>
    </li>
  );
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
