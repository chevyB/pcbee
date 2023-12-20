// UserList.js

import { HiUser } from "react-icons/hi";

const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  // Add more users as needed
];

const UserList = () => {
  return (
    <div className="p-4 bg-white">
      <h2 className="text-2xl font-semibold mb-4">User List</h2>
      <ul className="space-y-2">
        {users.map(user => (
          <li key={user.id} className="flex items-center p-2 rounded-md shadow-md">
            <HiUser className="w-6 h-6 text-gray-500 mr-2" />
            <div>
              <h3 className="text-lg font-semibold">{user.name}</h3>
              <p className="text-gray-500">{user.email}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
