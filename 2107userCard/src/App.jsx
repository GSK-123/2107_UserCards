import UserList from './components/UserList';
import assignmentData from './assets/assignmentData.json';

const App = () => {
  const users = assignmentData[0].data;

  return (
    <div>
      <UserList users={users} />
    </div>
  );
};


export default App
