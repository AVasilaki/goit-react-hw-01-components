import { Wrapper } from './Profile.styled';
export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div className="profile">
      <Wrapper>
        <img src={avatar} alt="User avatar" className="avatar" width={170} />

        <p className="name">{username}</p>
        <p className="tag">{tag} </p>
        <p className="location">{location} </p>

        <ul className="stats">
          <li>
            <span className="label">Followers</span>
            <span className="quantity">{followers} </span>
          </li>
          <li>
            <span className="label">Views</span>
            <span className="quantity">{views} </span>
          </li>
          <li>
            <span className="label">Likes</span>
            <span className="quantity">{likes} </span>
          </li>
        </ul>
      </Wrapper>
    </div>
  );
};
