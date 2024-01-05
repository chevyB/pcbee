
const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Cardo Dalisay', email: 'cardo@example.com' }
  ];
  
  const UserList = () => {
    return (
      <div className="p-2">
        <h2 className="font-semibold mb-4">User List</h2>
        <div className="bg-white dark:bg-gray-800 rounded-md shadow-md p-3">
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col border-r pr-4">
              <span className="text-lg font-semibold text-gray-500 border-b pb-2">ID</span>
              {users.map(user => (
                <span key={user.id} className="text-gray-500 border-b pb-2">{user.id}</span>
              ))}
            </div>
            <div className="flex flex-col border-r pr-4">
              <span className="text-lg font-semibold text-gray-500 border-b pb-2">Name</span>
              {users.map(user => (
                <span key={user.id} className="text-gray-500 border-b pb-2">{user.name}</span>
              ))}
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-gray-500 border-b pb-2">Email</span>
              {users.map(user => (
                <span key={user.id} className="text-gray-500 border-b pb-2">{user.email}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default UserList;
  