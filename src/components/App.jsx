import user from '../user.json';
import { Profile } from './Profile';
import data from '../data.json'
import { Panel } from './Statistics';
import { Statistics } from './Statistics';
import friends from '../friends.json'
import { FriendList } from './Frands';
export const App = () => {
  return (
    <div>
     <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      />
      <Panel title="Upload stats">
      <Statistics  stats={data} />
      </Panel>
      <FriendList friends={friends} />;
    </div>
  );
};
