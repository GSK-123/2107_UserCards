import '../UserList.css';
import assignmentData from '../assets/assignmentData.json';

const UserList = () => {
  const users = assignmentData[0].data;

  return (
    <div className="user-list-container">
      <p>User Cards</p>
      <div className="user-card-container">
        {users.map((user) => (
          <div className="user-card" key={user.id}>
            <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} className="avatar" />
            <div className="user-info">
              <h3>{`${user.first_name} ${user.last_name}`}</h3>
              <p>{user.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
